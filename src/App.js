import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Myportfolio from './Pages/Myportfolio/Myportfolio';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import { useState } from 'react';
import Purchase from './Pages/Purchase/Purchase';
import SignUp from './Pages/Login/SignUp';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageOrders from './Pages/Dashboard/ManageOrders';

import Profile from './Pages/Dashboard/Profile';
import AllUser from './Pages/Dashboard/AllUser';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  const [product,setProduct]=useState({});
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home setProduct={setProduct}></Home>} />
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path="/purchase" element={<RequireAuth><Purchase product={product}></Purchase></RequireAuth>}></Route>
      <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
      <Route index element={<Profile></Profile>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="users" element={<AllUser></AllUser>}></Route>
          <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route path="manageOrder" element={<ManageOrders></ManageOrders>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
          
      </Route>
      <Route path='/myportfolio' element={<Myportfolio></Myportfolio>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
