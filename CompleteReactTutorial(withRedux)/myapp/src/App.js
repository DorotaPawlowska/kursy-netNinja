import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p> welcome :) </p>
        <Ninjas name="Ryu" age="25" belt="black"/>
        <Ninjas name="Yoshi" age="20" belt="brown"/>
      </div>
    );
  }
}

export default App;
