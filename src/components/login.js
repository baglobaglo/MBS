import React from 'react';
import './login.css';

function Login() {
  return (
    <div id="login-div">
      <h3>LOGIN</h3>
      <body>
        <form action="/login-page">
          Email Address: <input type="text" /><br/>
          Password: <input type="text" /><br/>
          <button type="Login">Login</button>
        </form>
      </body>
    </div>
  );
}

export default Login;
