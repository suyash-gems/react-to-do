import React, {Fragment} from 'react'

const Footer = (props) => {
  const selectedStyle = {
    color: "red"
  }
  return(
    <Fragment>
      <p>Total <b>{props.total}</b></p>
      <p><b>{props.total - props.completed}</b> items left</p>
      <a
        style={props.filterType === "all" ? selectedStyle : null}
        onClick={() => props.setFilter("all")}>
          All
      </a>&nbsp;
      <a
        style={props.filterType === "active" ? selectedStyle : null}
        onClick={() => props.setFilter("active")}>
        Active
      </a>&nbsp;
      <a
        style={props.filterType === "completed" ? selectedStyle : null}
        onClick={() => props.setFilter("completed")}
        >Completed
      </a>&nbsp;
      {
        props.completed !== 0 &&
          <button onClick={() => props.clearCompleted()}>Clear Completed</button>
      }
    </Fragment>
  )
}

export default Footer