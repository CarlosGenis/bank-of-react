// src/components/UserProfile.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import Credits from './Credits'
import Debits from './Debits';
import {Link} from 'react-router-dom';
import './UserProfile.css';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1>User Profile</h1>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>
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
        </body>
          <h2>Account Balance</h2>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <Link to="/">
              <button type= "button">Return to Home</button>
          </Link>
        </div>
    );
  }
}

export default UserProfile;
