// src/components/Home.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://i.redd.it/q462oc1mzh031.jpg" alt="bank" width = "573" height = "573"/>
          <h1>Bank of React</h1>

        <body>
          <a>
            <Link to="/userProfile">
              <button type="button">User Profile</button>
            </Link>
          </a>
          <a>
            <Link to="/userProfile">
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
        </body>
          <h2>Account Balance</h2>
          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;
