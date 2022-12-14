import React from 'react';
import './sign-up.css';
import './general.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerHome, setRegisterHome] = useState('');
  const [registerPhone, setRegisterPhone] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerPasswordSecond, setRegisterPasswordSecond] =
    useState('');

  const isRegistered = useNavigate();

  const submitRegister = () => {
    if (
      registerName.length > 2 &&
      registerEmail.includes('@') &&
      registerHome.length > 2 &&
      registerPhone.length >= 8 &&
      registerPassword === registerPasswordSecond
    ) {
      alert('Register successful!');
      isRegistered('/');
    } else {
      alert('Check the information provided');
    }
  };

  return (
    <div id="sign-up-div">
      <h3> REGISTER </h3>
      <body>
        <form>
          Full Name:{' '}
          <input
            value={registerName}
            type="text"
            onChange={(e) => setRegisterName(e.target.value)}
          />{' '}
          <br />
          Email Address:{' '}
          <input
            value={registerEmail}
            type="text"
            onChange={(e) => setRegisterEmail(e.target.value)}
          />{' '}
          <br />
          Home Address:{' '}
          <input
            value={registerHome}
            type="text"
            onChange={(e) => setRegisterHome(e.target.value)}
          />{' '}
          <br />
          Phone Number:{' '}
          <input
            value={registerPhone}
            type="number"
            onChange={(e) => setRegisterPhone(e.target.value)}
          />{' '}
          <br />
          Password:{' '}
          <input
            value={registerPassword}
            type="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />{' '}
          <br />
          Confirm Password:{' '}
          <input
            value={registerPasswordSecond}
            type="password"
            onChange={(e) =>
              setRegisterPasswordSecond(e.target.value)
            }
          />{' '}
          <br />
          <button type="submit" onClick={() => submitRegister()}>
            {' '}
            Register{' '}
          </button>
        </form>
      </body>
    </div>
  );
}

export default Signup;
