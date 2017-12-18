import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component{
  componentWillMount(){
    console.log("I'm 1st");
  }

  componentDidMount(){
    console.log("I'm 2nd");
  }
  render(){
    return(
      <h1>Hello World!</h1>
    )
  }
}


ReactDOM.render(
<Greeting/>
  , document.getElementById('root')
);
