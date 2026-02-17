import axios from "axios";
import React, { Component } from "react";


class getReq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: "",
      title: "",
      body: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
    .then(response => 
        console.log(response.data)
    )
    .catch(error => 
        console.error(error)
    )
  }

  render() {
    const { userid, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userid"
              value={userid}
              onChange={this.changeHandler}
              placeholder="Enter User ID"
            />
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
              placeholder="Enter Title"
            />
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
              placeholder="Enter Body"
            />
          </div>
                  <button type="submit">Submit</button>

        </form>
      </div>
    );
  }
}

export default getReq;
