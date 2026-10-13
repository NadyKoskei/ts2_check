import React, { Component } from "react";

// Type describing the component state.
type CounterState = {
  count: number;
};

// A class component that maintains a counter state.
class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  // Method to increase the counter by 1.
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
