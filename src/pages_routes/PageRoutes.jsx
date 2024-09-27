import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import BottomNav from '../bottom_nav/BottomNav';
import Details from '../pages/product_details/Details';
import Signin from '../pages/user_auth/Signin';
import Sign_up from '../pages/user_auth/Sign_up';
import Footer from '../components/footer/Footer';

export default function PageRoutes() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product-details/:proId' element={<Details/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Sign_up/>}/>
      </Routes>
      <BottomNav/>
      <Footer/>
    </Router>
  )
}
