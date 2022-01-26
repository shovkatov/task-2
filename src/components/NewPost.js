import { Button, Form, Input, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postCreated, postReceived } from '../redux/actions';

const NewPost = () => {
  const navigateTo = useNavigate()
   const post = useSelector((state) => state.posts);
   const dispatch = useDispatch();
   const [newPost, setnewPost] = useState({
      userId: 105,
      title: '',
      body: '',
   });

   useEffect(()=>{
    dispatch(postCreated(newPost));
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
         dispatch(postCreated(newPost));
         openNotification('success');
         setTimeout(() => {
            navigateTo('/');
         }, 500);
      }
   };

   const inputToUser = (e) => {
      let { name, value } = e.target;
      setnewPost({ ...newPost, [name]: value });
   };

   const { title, body } = newPost;

   return (
      <div>
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

            <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
               <Button type="primary" htmlType="submit">
                  ADD
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default NewPost;