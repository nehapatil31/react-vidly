import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-sm btn-danger m-2"
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }

  /**
   * @description - If count is zero return 'zero' otherwise count
   */
  formatCount() {
    return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
  }

  /**
   * @description - return classes depending on the count
   */
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
