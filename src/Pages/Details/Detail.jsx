import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {logo} from "../../Data/Home/Content"
import { Home } from "../../Data/Pages/T-shirts/Data";
import Footer from "../Footer/Footer";
import "./Detail.css";

function Detail() {
  const { id } = useParams();
  const product = Home.find((item) => item.id.toString() === id);

  const [selectedImg, setSelectedImg] = useState(product?.imageid1);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
    <div className="nav">
        <div className="logo">
          <Link to="/"><img  src={logo} alt={logo} /></Link>
        </div>
        <div className="nav-link">
          <ul>
            <li>Categories</li>
            <li>About</li>
            <li> Contact Us</li>
          </ul>
        </div>

      </div>
    <div className="detail-container">
      <div className="detail-left">
        <div className="thumbnail-list">
          {[
            product.imageid1,
            product.imageid2,
            product.imageid3,
            product.imageid4,
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              className={`thumbnail ${selectedImg === img ? "active" : ""}`}
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
        <div className="main-image">
          <img src={selectedImg} alt="main product" />
        </div>
      </div>

      <div className="detail-right">
        <h2 className="product-title">{product.name}</h2>
        <div className="product-price">₹ {product.price}</div>
        <div className="product-rating">⭐ {product.rating}</div>

        <div className="size-section">
          <h3>Select Size</h3>
          <div className="sizes">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button key={size} className="size-btn">
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="btn-group">
          <Link to="/payment" state={{ id: product.id, price: product.price, totalAmount: product.totalPrice }}>
            <button className="buy-btn" >Buy Now</button>
          </Link>
        </div>

        <div className="product-details">
          <h3>Product Details</h3>
          <p>
            <strong>Name:</strong> {product.name}
          </p>
          <p>
            <strong>Location:</strong> {product.location}
          </p>
          <p>
            <strong>Guests:</strong> {product.guests}
          </p>
          <p>
            <strong>Room Type:</strong> {product.roomType}
          </p>
          <p>
            <strong>GST:</strong> {product.gst}
          </p>
          <p>
            <strong>Total Price:</strong> ₹ {product.totalPrice}
          </p>
          <h4>About</h4>
          <p>{product.about}</p>
          <h4>Details</h4>
          <p>{product.details}</p>
          <h4>Offers</h4>
          <p>{product.Offers}</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Detail;
