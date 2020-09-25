import React, {Component} from 'react'

const TableHeader = () => {
  return(
    <thead>
      <tr>
        <th>Todo</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  
  const rows = props.todoData.map((row, index) => {
    return(
      <tr key={index}>
        <td>{row.todo}</td>
        <td>
          <button onClick={() => props.removeTodo(index)}>Delete</button>
        </td>
      </tr>
    )
  })

return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const  {todoData, removeTodo} = this.props
    return(
      <table>
        <TableHeader/>
        <TableBody todoData={todoData} removeTodo={removeTodo}/>
      </table>
    )
  }
}

export default Table