import React, {useState} from 'react';

const Form = (props) => {
  const [todo, setTodo] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleChange = (event) => {
    setTodo(event.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (todo.trim() === '') {
      alert("Please enter something in the text box" );
    } else {
      props.handleSubmit({todo: todo, completed: completed });
      setTodo('');
      setCompleted(false);
    }
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="todo">Add Todo</label>
      <input
        type="text"
        name="todo"
        id="todo"
        value={todo}
        onChange={handleChange} />
    </form>
  );
}

export default Form;