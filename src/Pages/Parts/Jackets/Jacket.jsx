import React from 'react'
import HomePage from "../../Home/Home"
import {Home} from "../../../Data/Pages/Jacket/Data"
import { useNavigate } from 'react-router-dom'
import Footer from "../../Footer/Footer"

function Jacket() {
    const navigate=useNavigate();
  return (
    <div>
        <HomePage/>
        <div className='products'>
            {Home?.map((item,index)=>(
                <div className='product' key={index}>
                    <img src={item.image} alt={item.name} />
                    <div className="product-info">
              <h1>Name: {item.name}</h1>
              <h3>Rating: {item.rating}</h3>
              <p>Price: {item.price}</p>
            </div>
            <button
              className="book-now-btn"
              onClick={() => navigate(`/detail/${item.id}`)} 
            >
              Book Now
            </button>
                </div>
            ))}

        </div>
        <Footer/>
    </div>
  )
}

export default Jacket