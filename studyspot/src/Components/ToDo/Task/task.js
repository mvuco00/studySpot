import React, { Component } from "react";
import { Button } from "reactstrap";
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
      <div className={classes.taskdiv}>
        <div className={this.state.style} onClick={this.handleClick}>
          {this.props.item}
        </div>

        <Button
          onClick={() => this.props.handleDelete(this.props.index)}
          close
        />
      </div>
    );
  }
}

export default Task;
