import React, { Component } from 'react';
import imA from './imageA.jpg';
import imB from './imageB.jpg';
import imD from './imageD.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={imA} className="App-logo" alt="logo" />
        <img src={imB} className="App-logo" alt="logo" />
        <img src={imD} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
