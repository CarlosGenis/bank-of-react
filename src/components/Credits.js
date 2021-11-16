// src/components/Credits.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance'
import './Credits.css';

const Credits = (props) => {
	let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date = credit.date.slice(0,10);
            return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
        })
    }
    return (
    	<div>
    	   <h1>Credits</h1>
    	   {creditsView()}
           <form onSubmit={props.addCredit}>
					   <label for="text">Description </label>
             <input type="text" name="description" />
						 <label for="text"> Amount</label>
             <input type="number" name="amount" />
             <button type="submit">Add Credit</button>
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

    )
}
export default Credits;
