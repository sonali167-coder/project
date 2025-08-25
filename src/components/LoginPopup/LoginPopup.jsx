import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setshowLogin}) => {
    const [currentState, setCurrentState] = useState("Login")
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-popup-header">
                <h2>{currentState}</h2>
                <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currentState === "Login"? <></> : <input type='text' placeholder='yourName' required></input>}
                <input type='email' placeholder='yourEmail' required></input>
                <input type='passowrd' placeholder='password' required></input>
            </div>
            <button>{currentState === "Sign Up"?"Crate Account" : "Login"}</button>
            <div className="login-popup-cond">
                <input type='checkbox' required></input>
                <p>By continueing, i agree to all the terms and policies of the company</p>
            </div>
             {currentState === "Login"
             ? <p onClick={() => setCurrentState("Sign Up")}>Create a new account ? <span>Click here</span></p> 
             : <p onClick={() => setCurrentState("Login")}>Alraedy have account ? <span>Login here</span></p>}
            {/* <p>Create a new account ? <span>Click here</span></p>
            <p>Alraedy have account ? <span>Login here</span></p> */}
        </form>
    </div>
  )
}

export default LoginPopup