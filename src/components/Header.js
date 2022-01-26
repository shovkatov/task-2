import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <div className="w-full bg-blue-500 flex justify-end px-10 py-3">
         <div className='navbar'>
             <Link to={'/new-post'}><Button>New Post</Button></Link>
             <Link to={'/'}><Button>Posts</Button></Link>
             <Link to={'/login'}><Button>exit</Button></Link>
         </div>
      </div>
   );
};

export default Header;
