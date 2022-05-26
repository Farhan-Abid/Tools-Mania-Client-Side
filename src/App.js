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
import AddAReview from './Pages/Dashboard/AddAReview';
import MyProfile from './Pages/Dashboard/MyProfile';

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
      <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddAReview></AddAReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
      </Route>
      <Route path='/myportfolio' element={<Myportfolio></Myportfolio>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
