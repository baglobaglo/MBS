import React from 'react';
import './login.css';
import { useState } from 'react';
import raw from './customer-login.txt';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [notuser, setNotuser] = useState(false);
  const UserIsLoggedIn = useNavigate();
  const SignUp = useNavigate();
  const AdminLogin = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
    fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        if (username === '' && password === '') {
          alert('you need to type something');
        } else if (
          text.includes(username) &&
          text.includes(password)
        ) {
          UserIsLoggedIn('/Catalog');
        } else {
          alert('Sorry, but your credentials dont match');
        }
      });
  };
  function signUpbutton() {
    SignUp('/Signup');
  }

  function adminLoginButton() {
    AdminLogin('/AdminLogin');
  }

  return (
    <div>
      <div className="login-div">
        {' '}
        <br />
        <h3> LOGIN </h3>
        <form className="login-form">
          <label>
            {' '}
            Enter your username:
            <input
              value={username}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>{' '}
          <br />
          <label>Enter password:</label>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /> <br />
          <div className="login-button">
            <input type="submit" onClick={submitForm}></input>
          </div>
        </form>
      </div>{' '}
      <br /> <br />
      <div className="not-a-user">
        <div className="notauser">
          <label type="text">Not a user? </label>
          <button onClick={() => signUpbutton()}>Sign up</button>
        </div>

        <label type="text">Are you an admin? </label>
        <button onClick={() => adminLoginButton()}>
          Admin login
        </button>
      </div>
    </div>
  );
}

export default Login;
