import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import "./Signup.css";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [varifyname, setVarifyName] = useState(false);
    const [varifyemail, setVarifyEmail] = useState(false);
    const [varifyphone, setVarifyPhone] = useState(false);
    const [varifypassword, setVarifyPassword] = useState(false);
    const [varifyconfirmpassword, setVarifyConfirmPassword] = useState(false);

    useEffect(()=>{
        const nameRegex = /^[A-Za-z\s]+$/;
    if (name.length === 0) {
      setVarifyName(null);
    } else if (nameRegex.test(name)) {
      setVarifyName(true);
    } else {
      setVarifyName(false);
    }
    },[name]);

    useEffect(()=>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(email.length===0){
            setVarifyEmail(null);
        }else if(emailRegex.test(email)){
            setVarifyEmail(true);
        }else{
            setVarifyEmail(false);
        }
    },[email]);

    useEffect(()=>{
        const phoneRegex = /^\d{10}$/;
        if(phone.length===0){
            setVarifyPhone(null);
        }else if(phoneRegex.test(phone)){
            setVarifyPhone(true);
        }
        else{
            setVarifyPhone(false);  
        }
    },[phone]);
    useEffect(()=>{
        if(password.length===0){
            setVarifyPassword(null);
        }else if(password.length>=6){
            setVarifyPassword(true);
        }else{
            setVarifyPassword(false);
        }
    },[password]);
    useEffect(()=>{
        if(confirmPassword.length===0){
            setVarifyConfirmPassword(null);
        }else if(confirmPassword===password){
            setVarifyConfirmPassword(true);
        }else{
            setVarifyConfirmPassword(false);
        }
    },[confirmPassword,password]);


    const handlesubmit=(e)=>{
        e.preventDefault();
        if(!varifyname || !varifyemail || !varifyphone || !varifypassword || !varifyconfirmpassword){
            alert("Please fill all the fields correctly");
            return;
        }
        
        alert("Name: " + name + ", Email: " + email + ", Phone: " + phone);
    };
  return (
    <div className="signup-container">
      <span><Link to="/">^</Link></span>
      <h1>Signup Page</h1>
      <form onSubmit={handlesubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {varifyname === false && (
            <p>Name should contain only letters and spaces</p>
          )}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {varifyemail === false && <p>Email should be in a valid format</p>}
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {varifyphone === false && <p>Phone number should be 10 digits long</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {varifypassword === false && (
            <p>Password should be at least 6 characters long</p>
          )}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {varifyconfirmpassword === false && <p>Passwords do not match</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?
        <Link to="/signin"> Signin</Link>
      </p>
    </div>
  )
}

export default Signup