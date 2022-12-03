import React from 'react';
import './login.css';
import { useState } from 'react';
import Signup from './sign-up';
import raw from './test.txt';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const [notuser, setNotuser] = useState(false);
  const UserIsLoggedIn = useNavigate();
  const SignUp = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
    fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        if (text.includes(username) && text.includes(password)) {
          alert('login');
            UserIsLoggedIn('/Catalog')
        } else {
          alert('Sorry, but your credentials dont match');
        }
      });
  };
  function signUpbutton() 
  {
    SignUp('/Signup');
  }


  return (
    <div>
      <div className="not-a-user">
        <label type="text">Not a user? </label>
        <button onClick={() => signUpbutton()}>Sign up</button>
      </div>

        <div className="login-div">
          <h3> LOGIN </h3>
          <form className="login-form" onSubmit={submitForm}>
            <label>
              {' '}
              Enter your username/email:
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
            <br />
            <input type="submit" onClick ={() => Login()}></input>
          </form>
        </div>
    </div>
  );
}

export default Login;
