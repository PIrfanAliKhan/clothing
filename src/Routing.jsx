import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Body'
import Signup from "./Authentication/Signup/Signup";
import Signin from "./Authentication/Signin/Signin";
import Shirt from "./Pages//Parts/Shirts/Shirt";
import Hoodie from "./Pages/Parts/Hoddies/Hoodies";
import Jeans from "./Pages/Parts/Jeans/Jeans";
import Shorts from "./Pages/Parts/Shorts/Short";
import SweatShirt from "./Pages/Parts/Sweat_shirts/Sweatshirt";
import Trousers from "./Pages/Parts/Trousers/Trouser";
import Jacket from './Pages/Parts/Jackets/Jacket';
import Tshirt from "./Pages/Parts/Tshirts/Tshirt";
import Detail from "./Pages/Details/Detail";
import Payment from './Pages/Payments/Payment';

function Routing() {
  return (
    <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/jacket' element={<Jacket/>}/>
            <Route path='/shirt' element={<Shirt/>}/>
            <Route path='/trousers' element={<Trousers/>}/>
            <Route path='/sweat-shirts' element={<SweatShirt/>}/>
            <Route path='/shorts' element={<Shorts/>}/>
            <Route path='/jeans' element={<Jeans/>}/>
            <Route path='/hoodies' element={<Hoodie/>}/>
            <Route path='/t-shirt' element={<Tshirt/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/payment' element={<Payment/>}/>
        </Routes>
  )
}

export default Routing