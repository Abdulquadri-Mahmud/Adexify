import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Header from '../components/Header';
import BottomNav from '../bottom_nav/BottomNav';

export default function PageRoutes() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <BottomNav/>
    </Router>
  )
}
