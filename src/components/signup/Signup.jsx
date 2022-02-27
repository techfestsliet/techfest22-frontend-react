import React, { useState } from 'react';
import './Signup.css';
import signup_gif from '../../images/Signup gif.webm';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../API/api';
// require('dotenv').config("../../../.env");


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referralCode, setReferralCode] = useState('');

  const getName = (e) => {
    setName(e.target.value);
  }

  const getEmail = (e) => {
    setEmail(e.target.value);
  }

  const getPassword = (e) => {
    setPassword(e.target.value);
  }

  const getConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  const getReferralCode = (e) => {
    setReferralCode(e.target.value);
  }

  const onSubmitBtnClick = async() => {
    const data = {
      "name": name,
      "email": email,
      "password": password,
      "referralCode": referralCode
    }
    console.log(data)
    await axios.post(`${baseUrl}/signUp`, data).then(res => {
      console.log(res);
      
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      <div className="signUpBody ">
        <div className="SignUp  d-flex ">
          <div className="SignUp__Gif mt-5">
            <video loop={true} autoPlay={true} muted={true}>
              <source
                style={{ width: '600px', height: '400px' }}
                src={signup_gif}
                type="video/webm"
              />
            </video>
          </div>
          <div className="SignUp__inputs pt-5 mt-5 ">
            <form
              onsubmit=" return myFormValidation()"
              name="signupForm"
              action=""
              className="p-2"
            >
              <h1 className="text-light signupValidation" href="#">
                SignUp
              </h1>
              <label className="mt-3">
                <input
                  name="Fullname"
                  value={name}
                  onChange={getName}
                  required
                  autocomplete="off"
                  type="text"
                  placeholder=" "
                />
                <span>Full Name</span>
              </label>{' '}
              <br />
              <label>
                <input
                  name="emailId"
                  value={email}
                  onChange={getEmail}
                  required
                  autocomplete="off"
                  type="email"
                  placeholder=" "
                />
                <span>Email</span>
              </label>{' '}
              <br />
              <label>
                <input
                  name="password"
                  value={password}
                  onChange={getPassword}
                  required
                  autocomplete="off"
                  type="password"
                  placeholder=" "
                />
                <span>Password</span>
                <p className="text-danger" id="pass"></p>
              </label>{' '}
              <br />
              <label>
                <input
                  name="cnfPassword"
                  value={confirmPassword}
                  onChange={getConfirmPassword}
                  required
                  autocomplete="off"
                  type="text"
                  placeholder=" "
                />
                <span>Confirm Password</span>
                <p className="text-danger" id="cnfPass"></p>
              </label>
              <br />
              <label>
                <input
                  name="referal"
                  type="text"
                  value={referralCode}
                  onChange={getReferralCode}
                  required
                  autocomplete="off"
                  placeholder=" "
                />
                <span>Refral Code</span>
              </label>{' '}
              <br />
              <button type='button' onClick={onSubmitBtnClick} className="btn__color mb-3">Submit</button>
            </form>
            <p className="text-light mt-3 Signin__inputs__haveAcount">
              Already have an account?{' '}
              <NavLink
                className=" text-decoration-none text-light font-weight-bold "
                activeClassName="active"
                exact
                to="/signin"
              >
                {' '}
                <b>Sign In</b>
              </NavLink>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
