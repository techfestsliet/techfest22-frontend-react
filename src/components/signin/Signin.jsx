import React from 'react';
import './Signin.css';
import {NavLink} from "react-router-dom";
import signup_gif from '../../images/Signup gif.webm';
import forgotlogo from '../../images/background-main.png'
function Signin() {

  function ShowPassword()
{
    var shopass = document.getElementById("Showpass");
    var fa_eye = document.getElementById("fa_eye");

    
    var type = shopass.getAttribute("type");
    if(type === "password")
    {
        type = "text";
       shopass.setAttribute("type", type);
       fa_eye.classList.add("fa-eye");
       fa_eye.classList.remove("fa-eye-slash");
       
    }
    else
    {
        
        type = "password";
        shopass.setAttribute("type",type);
        fa_eye.classList.add("fa-eye-slash");
       fa_eye.classList.remove("fa-eye");
        
    }
    
}
  return (
    <div>
      <div className="SigninBody ">
        <div className="Signin justify-content-around  d-flex ">
          <div className="Signin__Gif mt-5">
          <video  loop = {true} autoPlay = {true} muted = {true}>
            <source style={{width:"600px",height:"400px"}} src={signup_gif} type = "video/webm" />

            </video>
          </div>

          <div className="Signin__inputs  ">
            <div className="Signin__inputs__head">
              <h2 className="text-light " href="#">
                Welcome Back!
              </h2>
              <p className="text-light">Sign in to continue</p>
            </div>
            <form name="SigninForm" action="" className=" text-center">
              <label>
                <input
                  name="emailId"
                  required
                  autoComplete="off"
                  type="email"
                  placeholder=" "
                />
                <span>Email</span>
              </label>{' '}
              <br />
              <label>
                <input
                  id="Showpass"
                  name="password"
                  required
                  autoComplete="off"
                  type="password"
                  placeholder=" "
                />

                <span>Password</span>
                <i
                  onClick={ShowPassword}
                  id="fa_eye"
                  className="fa fa-eye-slash"
                ></i>
                <p className="text-danger" id="pass"></p>
              </label>
              <div className="login__button d-flex justify-content-around">
                <input type="submit" className="btn__color mb-3"></input>
                <a className=" text-light text-decoration-none " href="/#">
                  Forgot Password?
                </a>
              </div>
            </form>
            <p className="text-light mt-3 Signin__inputs__haveAcount">
              Don't have an account?{' '}
              <NavLink
                className=" text-decoration-none text-light font-weight-bold "
                activeClassName="active" exact to="/signup" 
              >
                {' '}
                <b>Sign Up</b>
              </NavLink>{' '}
            </p>
          </div>
        </div>
      </div>

      {/* <div className="forgotpassword">
        <div className="forgotpassword__content">
                  <div className="forgotpassword__content__heading">
                    <h4>Forgot your password</h4>
                    <p>We will send you a email to reset your password</p>
                  </div>
        </div>
      </div> */}
    </div>
  )
}

export default Signin