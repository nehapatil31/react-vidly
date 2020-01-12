import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.handleDelete}
            onIncrement={this.props.handleIncrement}
            onDecrement={this.props.handleDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
