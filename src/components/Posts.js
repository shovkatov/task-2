import { LeftOutlined, RightOutlined, UserOutlined } from '@ant-design/icons/lib/icons';
import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { postReceived } from '../redux/actions';

const Posts = () => {
   const state = useSelector((state) => state.posts);
   const user = useSelector((state) => state.users);
   const dispatch = useDispatch();
   const [pageNumber, setPageNumber] = useState(0);

   const postPerPage = 10;
   const pages = pageNumber * postPerPage;

   const paginationPosts = state.slice(pages, pages + postPerPage).map((i, k) => {
      return (
         <div key={k} className="border-2 mb-5 hover:scale-105 hover:border-red-500">
            <Link to={`/edit-post/${i.id}`}>
               <Card title={i.title} bordered={false} style={{ width: 265, height: 290, position: 'relative' }}>
                  <p>{i.body}</p>
                  <p className="absolute bottom-5 left-5 font-bold">
                     <Link to={`/author/${i.userId}`}>
                        <UserOutlined className='-translate-y-1 mr-2'/>
                        {user[i.userId - 1].name}
                     </Link>
                  </p>
               </Card>
            </Link>
         </div>
      );
   });

   const isPost = () => {
      if (state.length === 0) {
         dispatch(postReceived());
      }
   };

   useEffect(() => {
      isPost();
   }, []);

   console.log(state);

   const pageCount = Math.ceil(state.length / postPerPage);
   const changePage = ({ selected }) => {
      setPageNumber(selected);
   };

   return (
      <div className="flex flex-col items-center py-8 px-12">
         <div className="flex flex-wrap justify-between mb-5">{paginationPosts}</div>
         <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName="pagination-btn flex"
            activeClassName="pagination-activ"
         />
      </div>
   );
};

export default Posts;
