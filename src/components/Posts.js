import { UserOutlined } from '@ant-design/icons/lib/icons';
import { Card, Space, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authorName, postReceived } from '../redux/actions';

const Posts = () => {
   const state = useSelector((state) => state.posts);
   const user = useSelector((state) => state.users);
   const dispatch = useDispatch();
   const [pageNumber, setPageNumber] = useState(0);

   const postPerPage = 20;
   const pages = pageNumber * postPerPage;

   const paginationPosts = state.slice(pages, pages + postPerPage).map((i, k) => {
      return (
         <div
            key={k}
            onClick={() => dispatch(authorName(...cardWithAthor(i.userId)))}
            className="border-2 mb-5 hover:scale-105 hover:border-red-500"
         >
            <Link to={`/edit-post/${i.id}`}>
               <Card title={i.title} bordered={false} style={{ width: 265, height: 120, position: 'relative' }}>
                  <p className="absolute bottom-5 left-5 font-bold">
                     <Link to={`/author/${i.userId}`} className="flex items-center">
                        <UserOutlined className="mr-2" />
                        <p>{cardWithAthor(i.userId)}</p>
                     </Link>
                  </p>
               </Card>
            </Link>
         </div>
      );
   });

   function cardWithAthor(ID) {
      const arr = [...user.filter((x) => x.id === ID).map((y) => y.name)];
      return arr;
   }

   const isPost = () => {
      if (state.length === 0) {
         dispatch(postReceived());
      }
   };

   useEffect(() => {
      isPost();
   }, []);

   const pageCount = Math.ceil(state.length / postPerPage);
   const changePage = ({ selected }) => {
      setPageNumber(selected);
   };

   return (
      <div className=" flex justify-center py-8 px-12">
         {state ? (
            <div className="flex flex-col items-center">
               <div className="flex flex-wrap justify-between mb-5">{paginationPosts}</div>
               <ReactPaginate
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName="pagination-btn flex"
                  activeClassName="pagination-activ"
               />
            </div>
         ) : (
            <Space size="large">
               <Spin size="large" />
            </Space>
         )}
      </div>
   );
};

export default Posts;
