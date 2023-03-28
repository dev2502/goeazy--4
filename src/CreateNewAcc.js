import React, { useState } from 'react';
import './createNewAccount.css';
import './headerForAll.css';
import logo2 from './logo2.png';
import bv_logo from './bv_logo.jpg';
import { useNavigate, } from 'react-router-dom';

function CreateNewAcc() {
  const [name, setName] = useState('');
  const [uid, setUid] = useState('');
  const [phnNum, setPhnNum] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleHomeButton = () => navigate("/LoginPage");

  const validate = () => {
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }else if (!/^[a-zA-Z\s]{2,20}$/i.test(name)){
      errors.name = 'Invalid Name';
    }
    if (!uid) {
      errors.uid = 'User ID is required';
    }else if(!/^[a-zA-Z]{5}[0-9]{5}$/i.test(uid)){
      errors.uid = 'Username must have 5 lowercase alphabets and 5 digits';
    }
    if (!phnNum) {
      errors.phnNum = 'Phone Number is required';
    } else if (!/^[6-9]{1}[0-9]{9}$/i.test(phnNum)) {
      errors.phnNum = 'Invalid Phone Number';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8 || password.length > 16) {
      errors.password = 'Password must be 8-16 characters long';
    } else if(!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/\d/.test(password)){
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter and one digit';
    }
    setErrors(errors);
    return errors;
  }

  function clearForm() {
    // document.forms['formCA'].elements['name'].value="";
    setName("");
    setPassword("");
    setPhnNum("");
    setUid("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      console.log(`Submitted: ${name} ${uid} ${phnNum} ${password}`);
      alert("Account Created!!");
      clearForm();
      // TODO: Handle form submission here
    }
  }

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

        <div className='containerCreateAcc'>
          <form className='formCA' onSubmit={handleSubmit}>
            <h1 className='h1CA'>Create new Account</h1>
            <br></br>
            <label className='labelCA'>
              Name:
              <input
                className='inputCA'
                type="text"
                name="name"
                value={name}
                placeholder="enter your name.."
                onChange={(event) => setName(event.target.value)}
                required />
              {errors.name && <div className='error'>{errors.name}</div>}
            </label>
            <label className='labelCA'>
              User ID:
              <input
                className='inputCA'
                type="text"
                name="uid"
                value={uid}
                placeholder="enter you banasthali ID.."
                onChange={(event) => setUid(event.target.value)}
                required />
              {errors.uid && <div className='error'>{errors.uid}</div>}
            </label>
            <label className='labelCA'>
              Phone Number:
              <input
                className='inputCA'
                type="text"
                name="phnNum"
                placeholder="enter phone number.."
                value={phnNum}
                onChange={(event) => setPhnNum(event.target.value)}
                required />
              {errors.phnNum && <div className='error'>{errors.phnNum}</div>}
            </label>
            <label className='labelCA'>
              Password:
              <input
                className='inputCA'
                type="password"
                name="password"
                value={password}
                placeholder="enter password.."
                onChange={(event) => setPassword(event.target.value)}
                required />
              {errors.password && <div className='error'>{errors.password}</div>}
</label>
<button className='buttonCA' type="submit">Create Account</button>
<div className='createNewAccBtn'>
<button className='btl' onClick={handleHomeButton}>Back to Login</button>
</div>
</form>
</div>
</div>
</>
);
}

export default CreateNewAcc;