import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 1 },
    ],
  };

  handleDelete = (id) => {
    console.log(id);

    const counters = this.state.counters.filter((c) => c.id != id);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    console.log(counter.id);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    console.log(this.state.counters[index]);
    // const counters = this.state.counters.filter((c) => c.id != id);
    // this.setState({ counters });
  };

  reset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button onClick={this.reset} className="btn btn-primary btn-sm m-4">
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          >
            <h4> Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
