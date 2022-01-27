import { UserOutlined } from '@ant-design/icons/lib/icons';
import { Button, Card } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const SelectedPost = () => {
   const navigate = useNavigate();
   const { postid } = useParams();
   const NAME = useSelector((state) => state.authorName);
   const post = useSelector((state) => state.posts);
   const user = useSelector((state) => state.users);
   const ID = useSelector((state) => state.authID);

   function handleCard() {
      const newArray = [...user.filter((i) => i.name == NAME), ...post.filter((i) => i.id == postid)];
      const newCard = { ...newArray[0], ...newArray[1] };
      return newCard;
   }

   function checkBtn() {
      const users = [...user.filter((i) => i.id == ID)];
      const n = { ...users[0] };
      return n;
   }

   return (
      <div className="flex justify-center pt-16">
         <Card title={handleCard().title} style={{ width: 450, height: 300, position: 'relative' }}>
            <p>{handleCard().body}</p>
            <div className="absolute bottom-5 left-5 font-bold w-full">
               <div className="flex items-center justify-between pr-10">
                  <div className="flex items-center">
                     <UserOutlined className="mr-2" />
                     <p>{handleCard().name}</p>
                  </div>
                  {checkBtn().username == handleCard().username ? (
                     <Button onClick={()=>navigate('/edit')} className="bg-green-500 text-lg">
                        Edit
                     </Button>
                  ) : (
                     <></>
                  )}
               </div>
            </div>
         </Card>
      </div>
   );
};

export default SelectedPost;
