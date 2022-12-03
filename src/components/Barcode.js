import React from 'react';
import './login.css';
import './general.css';
import { useNavigate } from 'react-router-dom';

function Barcode() {

    const backtohome = useNavigate();
    const Barcode = () => {
        var min = 111111111111;
        var max = 999999999999;
        return Math.floor(Math.random() * (max - min) ) + min;
      };

      function ToCatalog()
      {
        backtohome('/Catalog');
      }

      return (
        <div id="barcode-div">
          <h3> PURCHASE INFORMATION </h3>
            <body>
                {//Purchase Info
                }
                <h4> Purchase Information </h4> <br />
                <img className='Barcode-img' src='https://media.discordapp.net/attachments/1026654276925276230/1048742928954171462/Barcode_32896.jpg?width=300&height=200' alt='error' />
                <form action="/barcode-page" onSubmit={Barcode}>
                 <h5>Barcode: {Barcode()}</h5>
                  
                  {' '}
                  <button type='Back to Homepage' onClick={() => ToCatalog()}>Return Home</button>
                </form>
            </body>
        </div>
      );
    }

export default Barcode;