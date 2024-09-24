import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import BottomNav from '../bottom_nav/BottomNav';
import Details from './product_details/Details';

export default function PageRoutes() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product-details/:proId' element={<Details/>}/>
      </Routes>
      <BottomNav/>
    </Router>
  )
}
