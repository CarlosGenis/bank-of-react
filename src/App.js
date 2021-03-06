// src/App.js

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Credits from './components/Credits'
import Debits from './components/Debits';

import axios from "axios";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'John Bradshaw Layfield',
        memberSince: '11/29/66',
      },
      debits: [],
      credits: [],
      //variable for id
      numOnList: 0
    }
  }

  async componentDidMount() {
    let debits = await axios.get("https://moj-api.herokuapp.com/debits")
    let credits = await axios.get("https://moj-api.herokuapp.com/credits")

    //get data from API response
    debits = debits.data
    credits = credits.data

    let debitSum = 0, creditSum = 0;
    debits.forEach((debit) => {
      debitSum += debit.amount
    })
    credits.forEach((credit) => {
      creditSum += credit.amount
    })

    let accountBalance = ((creditSum - debitSum) * 100 / 100).toFixed(2);//rounded balance on home page
    this.setState({debits, credits, accountBalance});
  }

  addDebit = (e) => {
    //send to debits view via props
    //updates state based off user input
    e.preventDefault();
    let today = new Date().toISOString().slice(0, 10)
    const UpdatedDebit = {
      description: e.target.description.value,
      amount: e.target.amount.value,
      position: this.state.numOnList,
      date: String(today)
    }
    this.setState(prevState => ({
      debits: [...prevState.debits, UpdatedDebit],
      accountBalance: (this.state.accountBalance - UpdatedDebit.amount).toFixed(2)
    }))
  }

  addCredit = (e) => {
    //send to credits view via props
    //updates state based off user input
    e.preventDefault();
    let today = new Date().toISOString().slice(0,10)
    const UpdatedCredit = {
      description: e.target.description.value,
      amount: e.target.amount.value,
      position:this.state.numOnList,
      date: String(today)
    }
    this.setState(prevState => ({
      credits: [...prevState.credits, UpdatedCredit],
      accountBalance: (this.state.accountBalance - (-UpdatedCredit.amount)).toFixed(2)
    }))
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  accountBalance = {this.state.accountBalance}/>
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn}  accountBalance = {this.state.accountBalance}/>);
    const { credits } = this.state;
    const CreditsComponent = () => (<Credits addCredit={this.addCredit} credits={credits} accountBalance={this.state.accountBalance} />);
    const { debits } = this.state;
    const DebitsComponent = () => (<Debits addDebit={this.addDebit} debits={debits} accountBalance={this.state.accountBalance}/>);
    const HomePage = () => (
      <div>
        <h1>Welcome</h1>
        <Link to="/Debits">Debits</Link>
        <Link to="/Credits">Credits</Link>
      </div>
    );
    return (
        <Router>
          <switch>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/LogIn" render={LogInComponent}/>
            <Route exact path="/Credits" render={CreditsComponent}/>
            <Route exact path="/Debits" render={DebitsComponent}/>
          </switch>
        </Router>
    );
  }

  // App.js
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  };

}

export default App;
