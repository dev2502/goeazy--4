import React from "react";
import './myProfile.css';
import './headerForAll.css';
import logo2 from './logo2.png';
import bv_logo from './bv_logo.jpg';
import { useNavigate } from "react-router-dom";

function MyProfile() {
  
  const Navigate = useNavigate();
  const gotohome = () => Navigate('/CustomerHomePage') ;

  return(
    <>
    <div>

  {/* HEADER */}
  <div className="header">
          <div className="logo">
            <img src={logo2} alt="Logo"/>
          </div>
          <div className="bv_logo">
            <img src={bv_logo} alt="Logo"/>
          </div>
       </div>
  
  <div className="containerMP">
  <div class="profile">
    <button class="home-buttonMP" onClick={gotohome}> Home </button>
      
       <h1 className="h1MP">My Profile</h1>
       <div class="info">
         <label className="labelMP">Name:</label>
         <span>Sonam Gupta</span>
       </div>
      
       <div class="info">
         <label className="labelMP">User ID:</label>
         <span>BTBTC10034</span>
       </div>

       <div class="info">
         <label className="labelMP">Phone Number:</label>
         <span>+91 9554529085</span>
       </div>
     </div>
  </div>

    
    </div>
    </>
  )
}
export default MyProfile