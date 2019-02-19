import React, { Component } from 'react';
import picture from './image.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={picture} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
