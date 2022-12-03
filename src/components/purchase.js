import React from 'react';
import './login.css';
import './general.css';
import { useState } from 'react';

function Purchase() {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cardCVS, setCardCVS] = useState('');

  const Purchase = () => {
    if (
      cardName.length > 2 &&
      cardNumber.length === 16 &&
      expDate.length === 5 &&
      cardCVS.length === 3
    )
      alert('Payment successful!');
    else alert('Check the information provided.');
  };

  return (
    <div id="purchase-div">
      <h3> PURCHASE TICKETS FOR </h3>
      <body>
        {
          //Movie Info
        }

        {
          //Card Info
        }
        <h4> Card Information </h4>
        <form action="/purchase-page" onSubmit={Purchase}>
          Card Name:{' '}
          <input
            value={cardName}
            type="text"
            onChange={(e) => setCardName(e.target.value)}
          />{' '}
          <br />
          Card Number:{' '}
          <input
            value={cardNumber}
            type="number"
            onChange={(e) => setCardNumber(e.target.value)}
          />{' '}
          <br />
          Exp. Date:{' '}
          <input
            value={expDate}
            type="text"
            onChange={(e) => setExpDate(e.target.value)}
          />{' '}
          <br />
          CVS:{' '}
          <input
            value={cardCVS}
            type="number"
            onChange={(e) => setCardCVS(e.target.value)}
          />{' '}
          <br />
          <button type="Submit"> Submit </button>
        </form>
      </body>
    </div>
  );
}

export default Purchase;
