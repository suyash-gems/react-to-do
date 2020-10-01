import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import Footer from './Footer'
import Header from './Header'

class App extends Component {
  state = {
    todos: [],
  }

  render(){
    const { todos } = this.state
    return(
      <div className="container">
        <Header/>
        <Form handleSubmit={this.handleSubmit} />
        <Table todoData={todos} removeTodo={this.removeTodo} completeTodo={this.completeTodo} />
        <Footer total={todos.length} completed={this.completeTodoCount()}/>
      </div>
    )
  }

  removeTodo = (index) => {
    const {todos} = this.state
  
    this.setState({
      todos: todos.filter((todo, i) => {
        return i !== index
      })
    });
  }

  completeTodo = (index) => {
    const {todos} = this.state
    var todo = todos[index]
    todo.completed = !todo.completed;
    todos[index] = todo;
    this.setState({todos: todos})
  }

  completeTodoCount = () => {
    const {todos} = this.state
    return todos.filter((todo) => {
      return todo.completed === true
    }).length;
  }

  handleSubmit = (todo) => {
    this.setState({todos: [...this.state.todos, todo]})
  }
  
}

export default App