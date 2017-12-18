import React from 'react';
import ReactDOM from 'react-dom';

class BankAccount extends React.Component {
  state = {
    savings: 300,
    checking: 400
  }
  render(){
    return(
      <div>
        <h2>Savings: {this.state.savings}</h2>
        <h2>Savings: {this.state.checking}</h2>
        <h2>Total Balance: {this.state.savings + this.state.checking}</h2>
      </div>
    )
  }
}


ReactDOM.render(
<BankAccount/>
  , document.getElementById('root')
);
