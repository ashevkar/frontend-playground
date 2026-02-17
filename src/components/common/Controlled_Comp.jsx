import React, { Component } from "react";

export class Controlled_Comp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      gender: "",
      date: "",
    };
  }
  handleAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(
      `My name is ${this.state.name}, I am ${this.state.age} old and i am ${this.state.gender}`
    );
    event.preventDefault();
  };
  handlerName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleGender = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="flex justify-center items-center h-screen m-5 p-5  flex-col gap-2.5"
      >
        <div>
          <label for="name">Name :-</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handlerName}
            placeholder="Enter Name"
            className="bg-amber-200 border-2 px-2 rounded-lg"
          />
        </div>
        <div>
          <label for="age">Age :-</label>
          <input
            type="text"
            value={this.state.age}
            onChange={this.handleAge}
            placeholder="Enter age"
            className="bg-amber-200 border-2 px-2 rounded-lg "
          />
        </div>
        <div>
          <label for="Gender">Gender :- </label>
          <select
            id="gender"
            value={this.state.gender}
            onChange={this.handleGender}
            className="bg-amber-200 border-2 px-2 rounded-lg"
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Both">Both</option>
          </select>
        </div>
        <button type="submit" className="bg-amber-400 border-2 rounded-sm px-2">
          Submit
        </button>
      </form>
    );
  }
}

export default Controlled_Comp;
