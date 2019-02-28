import React, { Component } from 'react';
import imA from './imageA.jpg';
import imD from './imageD.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={imA} className="App-logo" alt="logo" />
          <img src={imD} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
