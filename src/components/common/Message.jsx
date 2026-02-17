import React, { Component } from 'react'

class Message extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: 'Hello, World!'
            }
        }
        changeMessage(){
            this.setState({
                message : "hi I am aish!"
            })
        }
        
    render(){
        return(
            <div>{this.state.message}
            <button onClick={() => this.changeMessage()}>Click here</button>
            </div>
        )
    }

    
}
export default Message;  