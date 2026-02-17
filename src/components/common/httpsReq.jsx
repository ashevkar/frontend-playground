import axios from 'axios'
// import { response } from 'express'
import React, { Component } from 'react'

 class httpsReq extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         demoData : []
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            this.setState({demoData : response.data})
        })
        .catch(error => {
            console.log(error);
            this.setState({errorMsg : "Error will retriving data"})
        })
    }
  render() {
    const {demoData, errorMsg} = this.state;
    return (
      <div>List of data
        {
            demoData.length ?
            demoData.map(item => <div key={item.id}> {item.title} </div>):
            null
        }
        {
            errorMsg ?
            <div>{errorMsg}</div>: null

        }

      </div>
    )
  }
}

export default httpsReq