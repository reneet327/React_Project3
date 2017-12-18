import React from 'react';
import ReactDOM from 'react-dom';


class TotalBalance extends React.Component{
  render(){
    return(
      <h1>Total Balance: {parseInt(this.props.savings) + parseInt(this.props.checking)}</h1>
    )
  }
}

class BankAccounts extends React.Component{
  render(){
    return(
      <div>
        <TotalBalance checking = {this.props.checking} savings={this.props.savings}/>
      </div>
    )
  }
}

ReactDOM.render(
  <BankAccounts savings = '100' checking = '300'/>
  , document.getElementById('root')
);
