import React, { Component } from "react";
import "./App.css";
import Movies from "./components/movies";
import Counters from "./components/counters";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 7 }
    ]
  };

  handleIncrement = counter => {
    let counters = [...this.state.counters];
    const index = counters.findIndex(c => c === counter);
    counters[index] = { ...this.state.counters[index] };
    counters[index].value += 1;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            handleDelete={this.handleDelete}
            handleIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
