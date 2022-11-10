import React from 'react';
import './sign-up.css';

function Signup() {
  return (
    <div id="sign-up-div">
      <h3>REGISTER</h3>
      <body>
        <form action="/sign-up-page">
          Full Name: <input type="text" /><br/>
          Email Address: <input type="text" /><br/>
          Home Address: <input type="text" /><br/>
          Phone Number: <input type="text" /><br/>
          Password: <input type="text" /><br/>
          Confirm Password: <input type="text" /><br/>
          <button type="Register">Register</button>
        </form>
      </body>
    </div>
  );
}

export default Signup;
