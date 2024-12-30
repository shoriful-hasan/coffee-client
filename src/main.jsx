import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addcoffee from './component/Addcoffee.jsx';
import Updatecoffee from './component/Updatecoffee.jsx';
import Coffecard from './component/Coffecard.jsx';
import Home from './Home/Home.jsx'
import Login from './LoginRegister/Login.jsx';
import Register from './LoginRegister/Register.jsx';
import Authprovider from './Porvider/Authprovider.jsx';
import User from './component/User.jsx';
import Signup from './component/Signup.jsx';
const router = createBrowserRouter([

{
  path : '/',
  element:<Home></Home>,
  children : [
{
path  : '/login',
element : <Login></Login>
},
{
  path : '/register',
  element : <Register></Register>
},
{
  path : '/signup',
  element : <Signup></Signup>
},
    {
      path: "/",
      element:<App></App>,
      loader : ()=> fetch('http://localhost:5000/coffeeAll') 
    },
    {
      path : '/addcoffee',
      element : <Addcoffee></Addcoffee>
    },
    {
      path : '/updatecoffee/:id',
      element : <Updatecoffee></Updatecoffee>,
      loader  : ({params})=> fetch(`http://localhost:5000/coffeeAll/${params.id}`)
    },
    {
      path: '/card',
      element : <Coffecard></Coffecard>
  
    },
    {
      path : '/user',
      element : <User></User>,
      loader :()=> fetch('http://localhost:5000/alluseremail'),
    }
  ]
},

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Authprovider alldatashow={<RouterProvider router={router} />}></Authprovider>
  </StrictMode>,
)
