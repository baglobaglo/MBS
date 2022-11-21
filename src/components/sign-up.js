import React from 'react';
import './sign-up.css';
import './general.css';
import { useState } from 'react';

function Signup() {
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerHome, setRegisterHome] = useState('');
  const [registerPhone, setRegisterPhone] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerPasswordSecond, setRegisterPasswordSecond] =
    useState('');

  const submitRegister = () => {
    if (
      registerName.length > 2 &&
      registerEmail.includes('@') &&
      registerHome.length > 2 &&
      registerPhone.length >= 8
    ) {
      if (registerPassword === registerPasswordSecond) {
        alert('Register successful!');
      } else {
        alert('Passwords no match');
      }
    } else {
      alert('Check the information provided');
    }
  };

  return (
    <div id="sign-up-div">
      <h3> REGISTER </h3>
      <body>
        <form action="/sign-up-page" onSubmit={submitRegister}>
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
          <button type="Register"> Register </button>
        </form>
      </body>
    </div>
  );
}

export default Signup;
