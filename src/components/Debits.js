// src/components/debits.js
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import axios from 'axios';
 class Debits extends Component{
     constructor (props) {
         super(props) 
         this.state = {
             debits: []
         }
     }
     componentDidMount() {
         axios.get('https://moj-api.herokuapp.com/debits')
             .then(response => this.setState({
                 debits: response.data }));
     }

     addDebit(enteredAmount) {
         <AccountBalance accountBalance={this.props.accountBalance + enteredAmount}/>
     }

     render() {
      let debitsView = () => {
          return this.props.debits.map((debit) => {
              let date = debit.date.slice(0,10);
              return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
          })
      }
  
      return (
      <div>
        <h1>Debits</h1>
        {debitsView()}
           <form onSubmit={this.props.addDebit}>
             <input type="text" name="description" />
             <input type="number" name="amount" />
             <button type="submit">Add Debit</button>
           </form>
  
              <AccountBalance accountBalance={this.props.accountBalance}/>
          </div>
      );
    }  
 }

export default Debits;
