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

  handleDelete = (index) => {
    //filter uzima listu (item i index) i vraća novu listu koja odgovara uvjetu
    //vrati listu elemenata čiji index nije kao index kojeg smo provjeravali
    const filteredList = this.state.todoList.filter((item, todoIndex) => {
      return todoIndex !== index;
    });
    this.setState({ todoList: filteredList });
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
          {this.state.todoList.map((item, index) => {
            return (
              <Task
                item={item}
                key={item}
                index={index}
                handleDelete={this.handleDelete}
              />
            );
          })}
        </div>
      </AuxComp>
    );
  }
}
export default ToDo;
