import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import LogIn from './LogIn';

const ProtectRoutes = () => {
   const state = useSelector((state) => state.isAuth);
   return state ? <Outlet /> : <LogIn />;
};

export default ProtectRoutes;
