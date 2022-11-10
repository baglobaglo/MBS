import React from 'react';
import './login.css';
import './general.css';

function Login() {
  return (
    <div id="login-div">
      <body>
        <h3>LOGIN</h3>
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
