import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

import "./Payment.css";

const Payment = () => {
  const location = useLocation();
  const { id, price, totalAmount } = location.state || { id: null, price: 0, totalAmount: 0 };
  
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [upiApp, setUpiApp] = useState(null);

  const paymentMethods = [
    { id: "upi", label: "UPI" },
    { id: "card", label: "Credit/Debit Card" },
    { id: "netbanking", label: "Net Banking" },
    { id: "cash", label: "Cash on Arrival" },
  ];

  const upiApps = [
    { id: "gpay", label: "Google Pay", upiId: "irfanalikhanp9@oksbi" },
    { id: "phonepe", label: "PhonePe", upiId: "6303412886-3@ybl" },
    { id: "paytm", label: "Paytm", upiId: "6303412886@ptsbi" },
  ];

  const generateUpiLink = (upiId) => {
    return `upi://pay?pa=${upiId}&pn=ResortBooking&am=${totalAmount}&cu=INR`;
  };

  const methodDetails = {
    upi: (
      <div>
        <h3>UPI Payment</h3>
        {!upiApp ? (
          <>
            <p>Select your UPI app:</p>
            {upiApps.map((app) => (
              <button key={app.id} onClick={() => setUpiApp(app)}>
                {app.label}
              </button>
            ))}
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h4>Scan to Pay with {upiApp.label}</h4>
            <QRCodeCanvas value={generateUpiLink(upiApp.upiId)} size={200} />

            <p>
              <a href={generateUpiLink(upiApp.upiId)}>
                Click here if you are on mobile
              </a>
            </p>
            <button onClick={() => setUpiApp(null)}>Change UPI App</button>
          </div>
        )}
      </div>
    ),
    card: (
      <div>
        <h3>Card Payment</h3>
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="MM/YY" />
        <input type="text" placeholder="CVV" />
        <button>Pay Now</button>
      </div>
    ),
    netbanking: (
      <div>
        <h3>Net Banking</h3>
        <select>
          <option>Select Bank</option>
          <option>SBI</option>
          <option>HDFC</option>
          <option>ICICI</option>
        </select>
        <button>Proceed</button>
      </div>
    ),
    cash: (
      <div>
        <h3>Cash on Arrival</h3>
        <p>You will pay at the resort reception.</p>
      </div>
    ),
  };

  return (
    <div className="payments-container">
      {/* Total amount */}
      <div className="product-info-box">
        <h2>Product ID: {id}</h2>
        <h2>Base Price: ₹{price}</h2>
        <h2>Total Amount (incl GST): ₹{totalAmount?.toFixed(2)}</h2>
      </div>

      {/* Payment section */}
      <div className="payment-section">
        {/* Left side: list */}
        <div className="payment-methods">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`method ${selectedMethod === method.id ? "active" : ""}`}
              onClick={() => {
                setSelectedMethod(method.id);
                setUpiApp(null); // Reset UPI app selection
              }}
            >
              {method.label}
            </div>
          ))}
        </div>

        {/* Right side: details */}
        <div className="payment-details">
          {selectedMethod ? (
            methodDetails[selectedMethod]
          ) : (
            <p>Select a payment method to continue</p>
          )}
        </div>
      </div>

      <div className="note">
        <h1>NOTE:</h1>
        <p>
          We did not have back end for our project looking for a backend
          developer. We hope we will refill this issue as soon as possible.
        </p>
        <h3>
          To order a product please have a quick 1-minute call or message us on
          WhatsApp.
        </h3>
        <h4>Contact us: 9876543211</h4>
        <h4>To text us on WhatsApp please click below</h4>

        <a
          href="https://wa.me/9154328747"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="whatsapp-btn">WhatsApp</button>
        </a>

        <p>Right now we have 2 payment methods:</p>
        <h4>1. UPI</h4>
        <h4>2. Pay on Delivery</h4>
        <p>These 2 payment methods are available.</p>
      </div>
    </div>
  );
};

export default Payment;
