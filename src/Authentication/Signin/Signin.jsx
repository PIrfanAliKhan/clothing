import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    alert("this is user email: " + email);
  };
  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <form onSubmit={handlesubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit"> Signin</button>
        </div>
      </form>
      <p>
        Old user? <Link to="/signup">Signup</Link>
      </p>
      
    </div>
  );
}

export default Signin;
