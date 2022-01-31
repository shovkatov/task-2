import { Button, Form, Input, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useId } from 'react-id-generator';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { postCreated, postDelete, postReceived, postUpdated } from '../redux/actions';

const EditPost = () => {
   const { cardID } = useParams();
   const navigateTo = useNavigate();
   const ID = useSelector((state) => state.authID);
   const posts = useSelector((state) => state.posts);
   const dispatch = useDispatch();
   const [newPost, setnewPost] = useState({
      title: '',
      body: '',
   });

   const postForUpdate = {...posts.filter(i=>i.id==cardID)[0]}

   useEffect(()=>{
      setnewPost({
         title:postForUpdate.title,
         body:postForUpdate.body
      })   
   },[])

   const openNotification = (type) => {
      if (type == 'error') {
         notification[type]({
            message: 'Failed',
         });
      } else {
         notification[type]({
            message: 'Succes',
         });
      }
   };

   const onFinish = () => {
      if (!title || !body) {
         openNotification('error');
         return false;
      } else {
         dispatch(postUpdated(newPost , cardID));
         openNotification('success');
         setTimeout(() => {
            navigateTo('/');
         }, 500);
      }
   };

   const inputToUser = (e) => {
      let { name, value } = e.target;
      setnewPost({ ...newPost, userId: ID, [name]: value });
   };

   const { title, body } = newPost;

   return (
      <div className="m-auto w-1/2 pt-10 form_btn">
         <h2 className='text-lg'>Edit Post</h2>
         <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
         >
            <Form.Item label="Title" rules={[{ required: true, message: 'Please input Title!' }]}>
               <Input value={title} name="title" onChange={inputToUser} />
            </Form.Item>

            <Form.Item label="Body" rules={[{ required: true, message: 'Please input Body!' }]}>
               <Input value={body} name="body" onChange={inputToUser} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
               <Button type="primary" htmlType="submit">
                  UPDATE
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default EditPost;
