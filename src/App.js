import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './PAGES/HomePage/Home'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserProfile from './PAGES/User/UserProfile';

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/user/:activepage' element={<UserProfile />}></Route>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App