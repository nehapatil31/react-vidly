import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDecrement } = this.props;

    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col-md-auto">
          <button
            className="btn btn-secondary btn-sm m-2"
            onClick={() => onIncrement(counter)}
          >
            +
          </button>
        </div>
        <div className="col-md-auto">
          <button
            className={`btn btn-secondary btn-sm m-2${
              counter.value === 0 ? " disabled" : ""
            }`}
            onClick={() => onDecrement(counter)}
          >
            -
          </button>
        </div>
        <div className="col-2">
          <button
            className="btn btn-sm btn-danger m-2"
            onClick={() => {
              this.props.onDelete(counter.id);
            }}
          >
            Delete
          </button>
        </div>
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
