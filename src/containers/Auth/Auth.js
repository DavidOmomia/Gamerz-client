import React, { useState} from "react";
import { Link } from "react-router-dom";

import "./Auth.scss";

import LogIn from './LogIn'
import SignUp from "./SignUp";
import Image1 from "../../assets/images/logchess.png";
import Image2 from "../../assets/images/logcard.png";


const Auth = props => {

    const [display,setDisplay]=useState(true)

    const changeForm=()=>{
        setDisplay(!display)
    }

    const form = display? (
        <LogIn/>
      ) : (
        <SignUp/>
      );
    const image = display?  <img src={Image1} alt="Happy Users" />: <img src={Image2} alt="Happy Users" />
    const text = display? 'Sign Up' : 'Log In'
    const option = display? "Don't" : "Already"
  return (
    <>
      <div className="Auth">
        <div className="home">
          <Link to="/">Go To Home</Link>
        </div>
        <div className="img cont">
        {image}
          <div className='after'></div>
        </div>
        <div className="Form cont">
          {form}
          <p style={{textAlign:'center',marginBottom:'4rem'}}>{option} have an account? <span style={{cursor:'pointer',color:'#2F80ED'}} onClick={changeForm}>{text}</span></p>
        </div>
      </div>
    </>
  );
};

export default Auth;
