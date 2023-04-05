

import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../layout/cross.svg";
import { ReactComponent as MenuIcon } from "../layout/menu-hamburger.svg";
import { ReactComponent as Logo } from "../layout/logo.svg";
import "./MainNavigationStyle.css";
import { Link } from "react-router-dom";



const MainNavigation = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  return (
    

    <nav className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </div>
        <div >
          <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" >
              <Link to='/' style={{fontSize:"1rem",fontFamily:'sans-serif'}}>Home</Link>
            </li>
            <li className="option" >
              <Link to='/Contact-Us' style={{fontSize:"1rem",fontFamily:'sans-serif'}}>Contact Us</Link>
            </li>
            <li className="option" >
            <Link to="/Term-Of-Service" style={{fontSize:"1rem",fontFamily:'sans-serif'}}>Term Of Service</Link>
            </li>
            <li className="option" >
            <Link to="/Privacy-Policy" style={{fontSize:"1rem",fontFamily:'sans-serif'}}>Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </nav>
  );
};

export default MainNavigation;
