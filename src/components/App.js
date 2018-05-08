import React, { Component } from 'react';
import CounterContainer from '../containers/CounterContainer';
import TodoContainer from '../containers/TodoContainer';

class App extends Component {
  render() {
    return (
      <div>
        <CounterContainer />
        <TodoContainer />
      </div>
    );
  }
}

export default App;
