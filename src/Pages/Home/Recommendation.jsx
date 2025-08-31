import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Recommended } from "../../Data/Home/Data";

function Recommendation() {
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    swipeToSlide: true,
    draggable: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="recommendations">
      <div className="sideheading">
        <h1>Recommendations</h1>
      </div>
      <Slider {...settings} className="recommended-carousel">
        {Recommended?.map((item, index) => (
          <div key={index} className="recommended-card">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <span className="price">{item.price}</span>
            <button className="Book-now" onClick={() => navigate(`/details/${item.id}`)}>
              Book Now
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Recommendation;
