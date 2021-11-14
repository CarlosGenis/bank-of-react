// src/components/Home.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://i.redd.it/q462oc1mzh031.jpg" alt="bank" width = "573" height = "573"/>
          <h1>Bank of React</h1>

        <body>
          <a>
            <Link to="/userProfile">User Profile &nbsp;&nbsp;</Link>
          </a>
          <a>
            <Link to="/LogIn">Log in &nbsp;&nbsp;</Link>
          </a>
          <a>
            <Link to="/Credits">Credits &nbsp;&nbsp;</Link>
          </a>
          <a>
            <Link to="/Debits">Debits &nbsp;&nbsp;</Link>
          </a>
        </body>
          <h2>Account Balance</h2>
          <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;
