import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      task: "",
    }
  }

  addTodo() {
    let todo = this.state.todos
    todo.push(this.state.task)
    this.setState({
      todos: todo
    })
  }

  deleteTodo(i) {
    let todo = this.state.todos
    todo.splice(i,1)
    this.setState({
      todos: todo
    })
  }

  editTodo(value, i) {
    let todo = this.state.todos
    todo[i]= value
    this.setState({
      todos: todo
    })
  }

  render() {
    return (
      <div className="App">
          <h1>Todo tes</h1>

          <input onChange={(e)=> this.setState({task:e.target.value})} type="text" />
          {this.state.todos.map((todo, i)=>
            <div key={i}>
            <p onClick={()=> this.setState({edit:i})}>{todo}  <button onClick={()=>this.deleteTodo(i)}>X</button></p>
            {(this.state.edit === i)
            ? <input onChange = {(e)=> this.editTodo(e.target.value, i)} type="text"/>
            :null
          }
          </div>
          )}
          <button onClick={()=> this.addTodo()}>Add todo</button>
      </div>

    );
  }
}

export default App;
