import { UserOutlined } from '@ant-design/icons/lib/icons';
import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userAuth } from '../redux/actions';

const Header = () => {
   const dispatch = useDispatch()
   const ID = useSelector((state) => state.authID);
   const user = useSelector((state) => state.users);

   function checkBtn() {
      const users = [...user.filter((i) => i.id == ID)];
      const n = { ...users[0] };
      return n.name;
   }
   

   return (
      <div className="w-full bg-blue-500 flex justify-between items-center px-10 py-3">
         <h2 className='flex items-center text-xl'>
            <UserOutlined className='mr-1'/>
            {checkBtn()}
         </h2>
         <div className="navbar">
            <Link to={'/new-post'}>
               <Button>New Post</Button>
            </Link>
            <Link to={'/'}>
               <Button>Posts</Button>
            </Link>
            <Link to={'/login'}>
               <Button onClick={()=>dispatch(userAuth(false))}>exit</Button>
            </Link>
         </div>
      </div>
   );
};

export default Header;
