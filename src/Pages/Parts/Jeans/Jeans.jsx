import React from 'react'
import {Home} from "../../../Data/Pages/Jeans/Data"
import HomePage from "../../Home/Home";
import { useNavigate } from 'react-router-dom';

function Jeans() {
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

export default Jeans