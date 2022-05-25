import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Blogs from './Pages/Blogs/Blogs';
import Myportfolio from './Pages/Myportfolio/Myportfolio';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import { useState } from 'react';
import Purchase from './Pages/Purchase/Purchase';
import SignUp from './Pages/Login/SignUp';

function App() {
  const [product,setProduct]=useState({});
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home setProduct={setProduct}></Home>} />
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path="/purchase" element={<RequireAuth><Purchase product={product}></Purchase></RequireAuth>}></Route>
      <Route path='/myportfolio' element={<Myportfolio></Myportfolio>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
