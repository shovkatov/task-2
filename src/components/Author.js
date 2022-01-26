import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Author = () => {
   const post = useSelector((state) => state.posts);
   const user = useSelector((state) => state.users);
   const dispatch = useDispatch();

   return <div></div>;
};

export default Author;
