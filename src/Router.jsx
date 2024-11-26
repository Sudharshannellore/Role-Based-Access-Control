import React from "react";
import { createBrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";
import UserRegister from "./pages/UserRegister";
import UserLogin from "./pages/Userlogin";
import User from "./pages/User";
import Admin from "./pages/Admin";
import ViewUsers from "./pages/ViewUsers";

const Router = createBrowserRouter([
{
    path : '/',
    element: <Home/>,
     
},
{
    path : '/adminregister',
    element : <AdminRegister/>,
},
{
    path : '/adminlogin',
    element : <AdminLogin/>,
},
{
    path : '/userregister',
    element : <UserRegister/>,
},
{
    path : '/userlogin',
    element : <UserLogin/>,
},
{
    path : '/user',
    element : <User/>,
},
{
    path : '/admin',
    element : <Admin/>,
},
{
    path : '/viewusers',
    element : <ViewUsers/>,
},

])
export default Router;