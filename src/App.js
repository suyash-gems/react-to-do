import React, {useState} from 'react'
import Table from './Table'
import Form from './Form'
import Footer from './Footer'
import Header from './Header'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filterType, setFilterType] = useState('all');

  const removeTodo = (index) => {
    setTodos(
      todos.filter((todo, i) => {
        return i !== index
      })
    );
  }

  const completeTodo = (index) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    );
  }

  const completedTodosCount = () => {
    return todos.filter((todo) => {
      return todo.completed === true
    }).length;
  }

  const handleSubmit = (todo) => {
    setTodos([...todos, todo])
  }

  const clearCompleted = () => {
    setTodos(
      todos.filter((todo) => {
        return todo.completed === false
      })
    )
  }

  const filterTodos = (filter_type) => {
    if(filter_type  === 'all') {
      return todos;
    } else if (filter_type  === 'active') {
      return todos.filter((todo) => {
        return todo.completed === false
      })
    } else if (filter_type  === 'completed') {
      return todos.filter((todo) => {
        return todo.completed === true
      })
    }
  }

  const setFilter = (filter_type) => {
    setFilterType(filter_type)
  }

  return(
    <div className="container">
      <Header/>
      <Form handleSubmit={handleSubmit} />
      <Table todoData={filterTodos(filterType)} removeTodo={removeTodo} completeTodo={completeTodo} />
      <Footer
        total={todos.length}
        completed={completedTodosCount()}
        clearCompleted={clearCompleted}
        setFilter={setFilter}
        filterType={filterType}
      />
    </div>
  )
  
}

export default App