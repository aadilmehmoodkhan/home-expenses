import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <AppHost />
      </Router>
    );
  }
}

class AppHost extends Component {
  render() {
    return (
      <div>
        bismillah
      </div>
    );
  }
}

export default App;
