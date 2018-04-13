import React, { Component } from 'react';

import Sidenav from './MainNav/index.js';

class App extends Component {
  
  state = {}

  render() {
    return (
      <div className="App">
        <Sidenav></Sidenav>
      </div>
    );
  }
}

export default App;
