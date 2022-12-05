import React from 'react';
import './login.css';
import './general.css';
import { useNavigate } from 'react-router-dom';

function Review() {
  const toCatalog = useNavigate();
  const backToHome = () => {
    alert('review has been made');
    toCatalog('/catalog');
  };
  return (
    <div id="purchase-div">
      <h3> MOVIE REVIEW </h3>
      <body>
        <h4> Share your experience! </h4>
        <form action="/purchase-page">
          <textarea cols="40" rows="10"/>
          <br />
          <button type="Submit" onClick={backToHome}>
            Submit
          </button>
        </form>
      </body>
    </div>
  );
}

export default Review;
