import React from 'react';
import './login.css';
import './general.css';

function Review() {
    
      return (
        <div id="purchase-div">
          <h3> MOVIE REVIEW </h3>
            <body>
              <h4> Share your experience! </h4>
              <form action="/purchase-page">
                <textarea /><br/>
                <button type="Submit">Submit</button>
              </form>
            </body>
        </div>
      );
    }

export default Review;
