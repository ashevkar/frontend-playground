import React from 'react'

const Destructing = props => {
    const { name } = props;   //for state or props in class component use this.props
  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}

export default Destructing