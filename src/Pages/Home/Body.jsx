import React from "react";
import { Home } from "../../Data/Home/Data.jsx";
import "./Home.css";
import PageHome from "./Home";
import Popular from "./Popular";
import Recommendation from "./Recommendation";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from "react-router-dom";

function Body() {
  const navigate = useNavigate();
  return (
    <div>
      <PageHome />
      <div className="products" id="products">
        {Home?.map((item, index) => (
          <div
            key={index}
            className="product-card"
            onClick={() => navigate(`/${item.name.toLowerCase()}`)}
          >
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            
          </div>
        ))}
      </div>

      <Recommendation />
      <Popular />
    </div>
  );
}

export default Body;
