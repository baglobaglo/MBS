import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import raw from './admin-login.txt';

const AdminLogin = () => {
  const [adminname, setAdminName] = useState('');
  const [adminpassword, setAdminPassword] = useState('');
  //const UserIsLoggedIn = useNavigate();
  const toADP = useNavigate();

  const loginAdmin = (event) => {
    event.preventDefault();
    fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        if (adminname === '' && adminpassword === '') {
          alert('you need to type something');
        } else if (
          text.includes(adminname) &&
          text.includes(adminpassword)
        ) {
          //UserIsLoggedIn('/Catalog');
          toADP('/AdminHP');
        } else {
          alert('Sorry, but your credentials dont match');
        }
      });
  };
  return (
    <div>
      <h3>Admin Login</h3> <br />
      <form className="login-form">
        <label>Enter your Admin Name: </label>
        <input
          value={adminname}
          type="text"
          onChange={(e) => setAdminName(e.target.value)}
        />{' '}
        <br />
        <label>Enter your password: </label>
        <input
          value={adminpassword}
          type="password"
          onChange={(e) => setAdminPassword(e.target.value)}
        />{' '}
        <br />
        <button onClick={loginAdmin}> Login </button>
      </form>
    </div>
  );
};

export default AdminLogin;
