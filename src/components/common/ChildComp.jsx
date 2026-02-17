import React from 'react'

const childComp = (props) => {
  return (
    <div>
        <button onClick={props.childHander('children')}> click me</button>
    </div>
  )
}

export default childComp