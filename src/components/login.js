import React from 'react';
import './login.css';
import { useState } from 'react';
import Signup from './sign-up';
import raw from './test.txt';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notuser, setNotuser] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        if (text.includes(username) && text.includes(password)) {
          alert('login');
          //insert link to catalog page here
        } else {
          alert('Sorry, but your credentials dont match');
        }
      });
  };

  return (
    <div>
      <label type="text">Not a user?</label>
      <button onClick={() => setNotuser(true)}>Sign up</button>

      {notuser ? (
        <Signup />
      ) : (
        <div className="login-div">
          <h3>Login for MBS</h3>
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
            <input type="submit"></input>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
