import React, { Component } from 'react';
import ChildComp from './ChildComp.jsx';

 class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first : "Nehal"
      }
      this.changeName = this.changeName.bind(this);
        }
    changeName(childName){
        alert(`Hello ${this.state.first} ${childName}`)    
        }
  render() {
    return (
      <div><ChildComp childHander = {this.changeName}/>Hiiii
      </div>
    )
  }
}

export default ParentComp