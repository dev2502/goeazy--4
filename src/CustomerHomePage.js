import React from 'react';
import './CustomerHomePage.css';
import './headerForAll.css';
import bv_logo from './bv_logo.jpg'
import logo2 from './logo2.png';
import stationerylogo from './stationerylogo.gif';
import pharmacylogo from './pharmacylogo.gif';
import generalstorelogo from './generalstorelogo.gif';
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const Navigate = useNavigate();
  const gotoProfile = () => Navigate('/MyProfile');
  const gotoOrders = () => Navigate('/MyOrders') ;
  const gotoBG = () => Navigate('/BillGenerator');
  // const handleClickLogoutCHP = () => Navigate ('/CustomerLogin')

  return (
    <div className='fullBody-chp'>

      {/* HEADER */}
       <div className="header">
          <div className="logo">
            <img src={logo2} alt="Logo"/>
          </div>
          <div className="bv_logo">
            <img src={bv_logo} alt="Logo"/>
          </div>
       </div>

      {/* nav bar for the links  */}
        <div className="navbar-chp">

          <button onClick={gotoProfile}>My Profile</button>
          <button onClick={gotoOrders}>My Orders</button>

        </div>

      {/* CONTAINER FRO THE REST  */}
      <div className="container-chp">

          {/* DIV FOR THE GIFS */}
          <div className="sections-chp">

            <button className="section-gif-chp" onClick={gotoBG}> <img src={pharmacylogo} height="300" width="300" /> </button>
            <button className="section-gif-chp" onClick={gotoBG}> <img src={generalstorelogo} height="300" width="300" /> </button> 
            <button className="section-gif-chp" onClick={gotoBG}> <img src={stationerylogo} height="300" width="300" /> </button>

          </div>

          {/* TIMING WALA DIV */}
          <div className="timings-chp">
            <h2>Delivery Timings:</h2>
            <p>Wednesday - Monday: 5pm - 8pm</p>
            <p>Tuesday: 10am - 1pm , 4pm-8pm</p>
          </div>

      </div>

    </div>
  )
}

export default HomePage;
