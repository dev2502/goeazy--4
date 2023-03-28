import React from 'react';
import './customer_shopkeeper_login.css';
import './headerForAll.css';
import logo2 from './logo2.png';
import bv_logo from './bv_logo.jpg';
import { useNavigate, } from 'react-router-dom';
import home from './home.jpg';
import { useState } from "react";

function CustomerLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleSubmitCLH = (event) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      navigate("/CustomerHomePage");
    } else {
      setErrors(validationErrors);
    }
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleHomeButton = () => navigate("/LoginPage");

  const validate = (data) => {
    let errors = {};
    if (!data.username) {
      errors.username = "Username is required";
    }else if(!/^[a-z]{5}[0-9]{5}$/i.test(data.username)){
      errors.username = 'Invalid username';
    }
    {errors.username && (
      <span className="error">{errors.username}</span>
    )}
    
    if (!data.password) {
      errors.password = "Password is required";
    }else if(!/[a-z]/.test(data.password) || !/[A-Z]/.test(data.password) || !/\d/.test(data.password)){
      errors.password = 'Invalid Password';
    }
    {errors.password && (
      <span className="error">{errors.password}</span>
    )}
    
    return errors;
  };

  return (
    <>
      <div>
        <div className="header">
          <div className="logo">
            <img src={logo2} alt="Logo" />
          </div>
          <div className="bv_logo">
            <img src={bv_logo} alt="Logo" />
          </div>
        </div>

        <div className="containerCL">
          <div className="login-boxCL">
            <h1 className="h1CL">Login as Student</h1>
            <form onSubmit={handleSubmitCLH}>
              <label className="labelCL" htmlFor="username">
                Smart Card ID:
              </label>
              <input
                className="inputCL-UN-PW"
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleInputChange}
              />
              {errors.username && (
                <span className="error">{errors.username}</span>
              )}

              <label className="labelCL" htmlFor="password">
                Password:
              </label>
              <input
                className="inputCL-UN-PW"
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}

              <input className="submitCL" type="submit" value="Login" />
            </form>
          </div>
          <button className="homeButton" onClick={handleHomeButton}>
            <img src={home} />
          </button>
        </div>
      </div>
    </>
  );
}

export default CustomerLogin;

