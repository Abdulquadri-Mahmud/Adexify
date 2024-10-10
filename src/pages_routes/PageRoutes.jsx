import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import BottomNav from '../bottom_nav/BottomNav';
import Details from '../pages/product_details/Details';
import Signin from '../pages/user_auth/Signin';
import Sign_up from '../pages/user_auth/Sign_up';
import Footer from '../components/footer/Footer';
import Private_Routes from '../components/private_routes/Private_Routes';
import ContactUs from '../pages/ContactUs';
import UserProfile from '../pages/profile/UserProfile';
import Womens_Wear from '../pages/Womens_Wear';
import Mens_Wear from '../pages/Mens_Wear';
import NotFound from '../pages/NotFound';
import Carts_Page from '../pages/cartsPage/Carts_Page';
import Wishlist_Page from '../pages/wishlist_page/Wishlist_Page';

export default function PageRoutes() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<Private_Routes/>}>
          <Route path='/product-details/:proId' element={<Details/>}/>
        </Route>
        <Route element={<Private_Routes/>}>
          <Route path='/profile/:userID' element={<UserProfile/>}/>
        </Route>
        <Route element={<Private_Routes/>}>
          <Route path='/view-carts' element={<Carts_Page/>}/>
        </Route>
        <Route element={<Private_Routes/>}>
          <Route path='/view-wishlist' element={<Wishlist_Page/>}/>
        </Route>
        <Route path="/womenswear" element={<Womens_Wear/>}/>
        <Route path="/menswear" element={<Mens_Wear/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Sign_up/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      {/* <BottomNav/> */}
      <Footer/>
    </Router>
  )
}
