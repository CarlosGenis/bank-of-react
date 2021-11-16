// src/components/Debits.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance'
import './Debits.css';

const Debits = (props) => {
  let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    })
  }
  return (
  <div>
    <h1>Debits</h1>
    {debitsView()}
    <form onSubmit={props.addDebit}>
      <label for="text">Description </label>
      <input type="text" name="description" />
      <label for="text"> Amount</label>
      <input type="number" name="amount" />
      <button type="submit">Add Debit</button>
      </form>
      <h1>Account Balance:</h1>
      <AccountBalance accountBalance={props.accountBalance}/>
      <body>
          <a>
            <Link to="/UserProfile">
              <button type="button">User Profile</button>
            </Link>
          </a>
          <a>
            <Link to="/LogIn">
              <button type="button">Log In</button>
            </Link>
          </a>
          <a>
            <Link to="/Credits">
              <button type= "button">Credits</button>
            </Link>
          </a>
          <a>
            <Link to="/Debits">
              <button type= "button">Debits</button>
            </Link>
          </a>
          <a>
            <Link to="/">
              <button type= "button">Return to Home</button>
            </Link>
          </a>
        </body>
    </div>
    );
}
export default Debits;
