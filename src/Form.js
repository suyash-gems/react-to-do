import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    todo: '',
  }

  state = this.initialState

  handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const {todo} = this.state

    return (
      <form>
        <label htmlFor="todo">Add Todo</label>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todo}
          onChange={this.handleChange} />
          <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form;