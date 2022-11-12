import React from 'react';
import './login.css';
import { useState } from 'react';
import Signup from './sign-up';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notuser, setNotuser] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    if (username === 'Sebb' && password === '123') {
      alert('Correct, logged in');
      /* Link to new page */
    } else {
      alert('Credentials dont match');
    }
  };

  return (
    <div>
      <label type="text">Not a user?</label>
      <button onClick={() => setNotuser(true)}>Sign up</button>

      {notuser ? (
        <Signup />
      ) : (
        <div className="login-div">
          <form className="login-form" onSubmit={submitForm}>
            <h3>Login for MBS</h3>
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
