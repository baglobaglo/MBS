import React from 'react';
import './login.css';
import './general.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Purchase() {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState(0);
  const [expDate, setExpDate] = useState('');
  const [cardCVS, setCardCVS] = useState(0);
  const [tickets, setTickets] = useState(0);
  const toBc = useNavigate();

//
  function toBar()
  {
    toBc('/Barcode');
  }

  const ticketAmount = () => {
    if (
      tickets > 9
    )
    {
      alert('Cannot purchase more than 10 at one time.');
      
    }
    else  setTickets(tickets + 1);
  }

  const purchase = () => {
    if (
      cardName.length > 2 &&
      cardNumber.length === 16 &&
      expDate.length === 5 &&
      cardCVS.length === 3
    )
    {
      alert('Payment successful!');
      toBar();
    }
    else alert('Check the information provided.');
  };

  return (
    <div id="purchase-div">
      <h3> PURCHASE TICKETS </h3> <br />
      <body>
        <div className="tickets-details">
          <h6>How many ticket do you want?</h6>
          <button onClick={() => ticketAmount()}>+</button>
          <p>
            Number of tickets: {tickets} <br /> Tickets left for this
            movie: {95 - tickets} <br />
          </p>
          <h6>At what city will you be watching this movie:</h6>
          <select name="city" id="city">
            <option value="Lubbock">Lubbock</option>
            <option value="Amarillo">Amarillo</option>
            <option value="San Antonio">San Antonio</option>
            <option value="Odessa">Odessa</option>
          </select>
          <h6>At what time:</h6>
          <select name="time" id="time">
            <option value="10:30am">10:30am</option>
            <option value="12:20pm">12:20pm</option>
            <option value="2:40pm">2:40pm</option>
            <option value="5:30pm">5:30pm</option>
          </select>
        </div>
        <br /> <br />
        <h4> Card Information </h4>
        <form>
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
          <button type="Submit" onClick={() => purchase()}> Submit </button> {//add link to barcode once added
}
        </form>
      </body>
    </div>
  );
}

export default Purchase;
