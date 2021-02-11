import React, { Component } from "react";
import classes from "./task.css";
class Task extends Component {
  state = {
    done: false,
    style: classes.task,
  };
  handleClick = () => {
    if (!this.state.done) {
      this.setState({ done: true, style: classes.done });
    } else {
      this.setState({ done: false, style: classes.task });
    }
  };

  render() {
    return (
      <div>
        <div className={this.state.style} onClick={this.handleClick}>
          {this.props.item}
        </div>
        <button onClick={() => this.props.handleDelete(this.props.index)}>
          DELETE
        </button>
      </div>
    );
  }
}

export default Task;
