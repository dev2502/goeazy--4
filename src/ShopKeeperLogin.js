import React, { useState } from 'react';
import './customer_shopkeeper_login.css';
import './headerForAll.css'
import logo2 from './logo2.png';
import bv_logo from './bv_logo.jpg';
import { useNavigate, } from 'react-router-dom';
import home from './home.jpg';

function ShopKeeperLogin () {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitSLH = (event) => {
    event.preventDefault();

    if (username === '' || password === '') {
      setErrorMessage('Please fill in all fields');
    } else if(!/[a-z]{5}[0-9]{5}/.test(username)){
      setErrorMessage('Invalid id');
    }
    else if (password.length < 8 || password.length > 16) {
      setErrorMessage('Password must be at least 8-16 characters long');
    } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)) {
      setErrorMessage('Invalid Password');
    } else {
      navigate('/shopkeeperHomePage');
    }
  }

  const handleHomeButton = () => navigate('/LoginPage');

  return (
    <>
      <div>
        <div className="header">
          <div className="logo">
            <img src={logo2} alt="Logo"/>
          </div>
          <div className="bv_logo">
            <img src={bv_logo} alt="Logo"/>
          </div>
        </div>

        <div className='containerCL'>
          <div className="login-boxCL">
            <h1 className='h1CL'>Login as Shop Owner</h1>
            <form onSubmit={handleSubmitSLH}>
              <label className='labelCL' htmlFor="username">ID:</label>
              <input
                className='inputCL-UN-PW'
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <label className='labelCL' htmlFor="password">Password:</label>
              <input
                className='inputCL-UN-PW'
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {errorMessage && <div className="error">{errorMessage}
              </div>}
              
              <input className='submitCL' type="submit" value="Login" />
            </form>
          </div>

          <button className='homeButton' onClick={handleHomeButton}><img src={home} alt="Home"/></button>

          {/* <footer>
             © 2023 Team GoEazy. All rights reserved.
          </footer> */}
        </div>
      </div>
    </>
  )
}

export default ShopKeeperLogin ;
