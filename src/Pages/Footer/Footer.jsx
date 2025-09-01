import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2 className="footer-title">Your Brand Name</h2>
        <p className="footer-quote">"A meaningful quotation for your website"</p>
      </div>

      <div className="footer-right">
        <p><strong>Phone:</strong> +91 9876543211</p>
        <p><strong>Email:</strong> gujjuu@gmail.com</p>
        <p className="footer-support">
          For customer support, feel free to contact us.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
