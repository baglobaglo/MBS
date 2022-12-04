import React from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const Login = useNavigate();

  const takeMeHome = () => {
    Login('/Login');
  };

  return (
    <div>
      {' '}
      <div id="header-div">
        <p id="header-mbs-name">MBS - Movie Booking System</p>{' '}
        <button onClick={takeMeHome}> X </button>
      </div>
      <br />
    </div>
  );
}

export default Header;
