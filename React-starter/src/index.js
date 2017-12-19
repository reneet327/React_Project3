import React from 'react';
import ReactDOM from 'react-dom';



class TodoList extends React.Component{
  render(){
    const list = this.props.items.map(item => (<li key={item}>{item}</li>));

    return(

      <div>
        <h1>{this.props.title}</h1>
          <ul>
            {list}
          </ul>
      </div>
    )
  }
}

ReactDOM.render(
<TodoList title="Student Todo List" items={['Sign up for code review', 'Finish TodoList component', 'Get lots of sleep']}/>
  , document.getElementById('root')
);
