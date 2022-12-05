import React from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const Login = useNavigate();

  const takeMeHome = () => {
    Login('/');
  };

  const backout = useNavigate();
  const return1 = () =>
  {
    backout(-1);
  }



  return (
    <div>
      {' '}
      <div id="header-div">
        <p id="header-mbs-name">MBS - Movie Booking System</p>{' '}
        <button onClick={takeMeHome}> Log out </button>
        <button onClick={ return1 }>Return</button>

      </div>
      <br />
    </div>
  );
}

export default Header;
