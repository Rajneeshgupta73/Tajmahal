import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [checkLogin, setCheckLogin] = useState('false');
  // const checkLogin = true;
  return (
    <div className="headerWrapper">
      <img
        src="https://www.pngitem.com/pimgs/m/490-4903492_taj-mahal-restaurant-taj-mahal-name-logo-png.png"
        alt="logo"
      />

      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Offers</Link>
        </li>
        <li>
          <Link to="/">Help</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="loginBtn">
        {checkLogin ? (
          <button type="button" onClick={() => setCheckLogin(false)}>
            Logout
          </button>
        ) : (
          <button type="button" onClick={() => setCheckLogin(true)}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
