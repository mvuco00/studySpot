import React, { Component } from "react";
import AuxComp from "../../HOC/auxcomp";
import Task from "./Task/task";

class ToDo extends Component {
  state = {
    todoList: ["Kupit mlijeko", "Hustlat"],
    userInput: "",
  };
  handleInput = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.userInput != "") {
      this.setState({
        todoList: [this.state.userInput, ...this.state.todoList],
        userInput: "",
      });
    }
  };
  render() {
    return (
      <AuxComp>
        <div>TODO</div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="ToDo..."
            value={this.state.userInput}
            onChange={this.handleInput}
          />
          <input type="submit" value="Dodaj" />
        </form>

        <div>
          {this.state.todoList.map((item) => {
            return <Task item={item} key={item} />;
          })}
        </div>
      </AuxComp>
    );
  }
}
export default ToDo;
