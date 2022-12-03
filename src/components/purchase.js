import React from 'react';
import './login.css';
import './general.css';
import { useState } from 'react';

function Purchase() {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cardCVS, setCardCVS] = useState('');
  const [tickets, setTickets] = useState(0);

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
      <h3> PURCHASE TICKETS </h3> <br />
      <body>
        <div className="tickets-details">
          <h6>How many ticket do you want?</h6>
          <button onClick={() => setTickets(tickets + 1)}>+</button>
          <p>
            Number of tickets: {tickets} <br /> Tickets left for this
            movie: {95 - tickets} <br />
          </p>
          <h6>At what city will you be watching this movie?:</h6>
          <select name="city" id="city">
            <option value="Lubbock">Lubbock</option>
            <option value="Amarillo">Amarillo</option>
            <option value="San Antonio">San Antonio</option>
            <option value="Odessa">Odessa</option>
          </select>
        </div>
        <br /> <br />
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
          <button type="Submit"> Submit </button> {//add link to barcode once added
}
        </form>
      </body>
    </div>
  );
}

export default Purchase;
