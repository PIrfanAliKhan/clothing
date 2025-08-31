import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Body'
import Signup from "./Authentication/Signup/Signup";
import Signin from "./Authentication/Signin/Signin";
import Tshirt from "./Pages/Parts/Tshirts/Tshirt";
import Detail from "./Pages/Details/Detail"
import Payment from './Pages/Payments/Payment';

function Routing() {
  return (
    <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/t-shirt' element={<Tshirt/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/payment' element={<Payment/>}/>
        </Routes>
  )
}

export default Routing