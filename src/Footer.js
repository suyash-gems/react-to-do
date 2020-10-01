import React, {Fragment} from 'react'

const Footer = (props) => {
  return(
    <Fragment>
      <p>Total {props.total}</p>
      <p>Completed {props.completed}</p>
    </Fragment>
  )
}

export default Footer