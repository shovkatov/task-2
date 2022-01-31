import { EnvironmentOutlined } from '@ant-design/icons/lib/icons';
import { Descriptions, Modal } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Map, Placemark, YMaps } from 'react-yandex-maps';

const Author = () => {
   const post = useSelector((state) => state.posts);
   const user = useSelector((state) => state.users);
   const { id } = useParams();
   const [isModalVisible, setIsModalVisible] = useState(false);

   const showModal = () => {
      setIsModalVisible(true);
   };

   const handleOk = () => {
      setIsModalVisible(false);
   };

   const newUser = { ...user.filter((i) => i.id === +id)[0] };
   const userPosts = [...post.filter((i) => i.userId === +id)];

   return (
      <div className="px-20 py-8">
         <Descriptions title="Author Info" layout="vertical" bordered className="border-2 border-black">
            <Descriptions.Item label="Username">{newUser.username}</Descriptions.Item>
            <Descriptions.Item label="Full Name">{newUser.name}</Descriptions.Item>
            <Descriptions.Item label="Contact">{newUser.phone}</Descriptions.Item>
            <Descriptions.Item label="Company Info">
               {newUser.company.name} <br />
               {newUser.company.catchPhrase}
               <br />
               {newUser.company.bs}
            </Descriptions.Item>
            <Descriptions.Item label="Posts">
               {userPosts.map((i,k) => {
                  return <li key={k}>{i.title}</li>;
               })}
            </Descriptions.Item>
            <Descriptions.Item label="Address">
               {newUser.address.street} <br />
               {newUser.address.city} <br />
               {newUser.address.suite} <br />
               {newUser.address.zipcode}
               <br />
               <button onClick={showModal} className="text-base flex items-center hover:cursor-pointer hover:text-blue-500">
                  {` Location`}
                  <EnvironmentOutlined />
               </button>
            </Descriptions.Item>
         </Descriptions>
         <Modal title="Location" visible={isModalVisible} onOk={handleOk} closable={false} width={370}>
            <YMaps>
               <Map
                  defaultState={{
                     center: [`${newUser.address.geo.lat}`, `${newUser.address.geo.lng}`],
                     zoom: 2,
                  }}
               >
                  <Placemark geometry={[`${newUser.address.geo.lat}`, `${newUser.address.geo.lng}`]} />
               </Map>
            </YMaps>
         </Modal>
      </div>
   );
};

export default Author;
