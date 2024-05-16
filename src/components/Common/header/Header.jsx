import React, { useState } from 'react';
import Head from "./Head";
import "./header.css";
import { Link } from 'react-router-dom';
import LoginSignup from "../../loginsignup/LoginSignup";

const Header = () => {
  const [showLoginSignup, setShowLoginSignup] = useState(false);
  const [click, setClick] = useState(false);

  const handleButtonClick = () => {
    setShowLoginSignup(!showLoginSignup);
  };

  return (
    <div>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Courses">Courses</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
          </ul>
          <div className="startr">
            <div className="button">
              {/* Your home page content here */}
              {/* Button to toggle LoginSignup visibility */}
              <button onClick={handleButtonClick}>
                {showLoginSignup ? "Hide Login/Signup" : "Show Login/Signup"}
              </button>
              {/* Conditionally render LoginSignup based on the state */}
              {showLoginSignup && <LoginSignup />}
            </div>
            <button className="btn"><span><Link to="/LoginSignup">Signup</Link></span></button>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'></i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
