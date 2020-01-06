import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  haddleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.haddleIncrement}
        >
          Increment
        </button>
        <button
          className="btn btn-sm btn-danger m-2"
          onClick={() => {
            this.props.handleDelete(this.props.counter.id);
          }}
        >
          Delete
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  /**
   * @description - If count is zero return 'zero' otherwise count
   */
  formatCount() {
    return this.state.value === 0 ? "zero" : this.state.value;
  }

  /**
   * @description - return classes depending on the count
   */
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
