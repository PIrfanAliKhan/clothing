import React from 'react'
import HomePage from "../../Home/Home";
import {Home } from "../../../Data/Pages/Trousers/Data";
import { useNavigate } from 'react-router-dom';

function Trouser() {
  const navigate = useNavigate();

  return (
    <div>
      <HomePage />
      <div className="Products">
        {Home.map((item, index) => (
          <div className="product" key={index}>
            <img src={item.image} alt={item.title} />
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
    </div>
  );
}

export default Trouser