import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    todos: [],
  }
  render(){
    const { todos } = this.state
    return(
      <div className="container">
        <h1>Todo Application</h1>
        <Form handleSubmit={this.handleSubmit} />
        <Table todoData={todos} removeTodo={this.removeTodo} />
      </div>
    )
  }

  removeTodo = (index) => {
    const {todos} = this.state
  
    this.setState({
      todos: todos.filter((todo, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (todo) => {
    this.setState({todos: [...this.state.todos, todo]})
  }
  
}

export default App