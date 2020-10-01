import React, {Component} from 'react'

const TableHeader = () => {
  return(
    <thead>
      <tr>
        <th>Todo</th>
        <th>Completed</th>
        <th colSpan="2">Actions</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  
  const rows = props.todoData.map((row, index) => {
    return(
      <tr key={index}>
        <td>{row.todo}</td>
        <td>{row.completed ? 'Yes' : 'No'}</td>
        <td>
          <button onClick={() => props.removeTodo(index)}>Delete</button>
        </td>
        <td><input type="checkbox" onClick={() => props.completeTodo(index) }/>complete</td>
      </tr>
    )
  })

return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const  {todoData, removeTodo, completeTodo} = this.props
    return(
      <table>
        <TableHeader/>
        <TableBody todoData={todoData} removeTodo={removeTodo} completeTodo={completeTodo}/>
      </table>
    )
  }
}

export default Table