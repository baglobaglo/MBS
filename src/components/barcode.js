import React from 'react';
import './login.css';
import './general.css';

function Barcode() {

    const Barcode = () => {
        var min = 111111111111;
        var max = 999999999999;
        return Math.floor(Math.random() * (max - min) ) + min;
      };

      return (
        <div id="barcode-div">
          <h3> PURCHASE INFORMATION </h3>
            <body>
                {//Purchase Info
                }
                <h4> Purchase Information </h4>
                <form action="/barcode-page" onSubmit={Barcode}>
                Barcode:{' '}
                {Barcode()}
                {' '}
                </form>
            </body>
        </div>
      );
    }

export default Barcode;
