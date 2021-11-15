// Login.js
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import './LogIn.css';

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button>Log In</button>
        </form>
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
    )
  }
}

export default LogIn
