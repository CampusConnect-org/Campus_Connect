import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';

export const Login = () => {
  return (
    <div className="box">
        <div className="container">

            <div className="top">
                <span className="check">Have an account?</span>
                <div className="header">Login</div>
            </div>

            <div className="input-field">
                <input type="text" className="input" placeholder="Email" id="" />
                <i className='bx bx-user' ></i>
            </div>

            <div className="input-field">
                <input type="Password" className="input" placeholder="Password" id="" />
                <i className='bx bx-lock-alt'></i>
            </div>

            <div className="input-field">
                <input type="submit" className="submit" value="Login" id="" />
            </div>

            <div className="two-col">
                <div className="one">
                    <input type="checkbox" name="" id="check" />
                    <label for="check"> Remember Me</label>
                </div>
                <div className="two">
                    <label><a href="#">Forgot password?</a></label>
                </div>
            </div>
        </div>
    </div>
  )
}
