import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
class Todos extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newToDo:"",
      addedToDos: [{
        text: "Waking Up",
        isComplete: false
      },
      {
        text: "Washroom",
        isComplete: false
      },
      {
        text: "Brush",
        isComplete: false
      },
      {
        text: "Bath",
        isComplete: false
      },
      {
        text: "Breakfast",
        isComplete: false
      },
      {
        text: "Lunch",
        isComplete: false
      }
    ]
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    const todo = e.target.value;
    this.setState({
      newToDo: todo
    });
  }
  addNewTodo(e){
    e.preventDefault();
  }
  render(){
    return(
      <div>
        <form onSubmit={this.addNewTodo}>
          <label for="">Add it Here:</label>
          <input type="text"
          placeholder="Enter a TODO"
          onChange={this.onChange}
          value={this.state.newToDo}/>
        </form>
      </div>
    )
  }
}
render(<Todos />, document.getElementById('root'));
