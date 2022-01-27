import { Button, Form, Input, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authID, userAuth, userReceived } from '../redux/actions';

function LogIn () {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const state = useSelector((state)=>state.users);
   const [user, setUser] = useState({ email: '' });
   const { email } = user;
   
   const isUser = () => {
      if (state.length === 0) {
         dispatch(userReceived());
      }
   };

   useEffect(() => {
      isUser();
   }, []);

   const openNotification = (type) => {
      if (type === 'error') {
         notification[type]({
            message: 'Failed',
         });
      } else {
         notification[type]({
            message: 'Succes',
         });
      }
   };

   function authId(){
      const ID = state.filter(i=>i.email===user.email)
      return ID[0].id
   }

   const onFinish = () => {
      if (!email) {
         openNotification('error');
         return false;
      } else {
        if (checkEmail()) {
           dispatch(userAuth())
           dispatch(authID(authId()))
            openNotification('success');
            navigate('/');
         } else {
            openNotification('error');
         }
      }
   };

   function checkEmail() {
      let y = [];
      const x = state.map((i) => {
         if (i.email === email) {
            return true;
         } else {
            return false;
         }
      });
      y[0] = [...x.filter((i) => i === true)];
      return y[0].length === 1;
   }

   return (
      <div className="m-auto mt-4 w-80 flex flex-col items-center login">
         <h2 className="font-bold text-3xl mb-6">Log In</h2>
         <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 0 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
         >
            <Form.Item label="EMail" name="email" rules={[{ type: 'email', message: 'Please input your email!' }]}>
               <Input onChange={(e) => setUser({ email: e.target.value })} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
               <Button type="primary" htmlType="submit">
                  Submit
               </Button>
            </Form.Item>
         </Form>
      </div>
   );
};

export default LogIn;
