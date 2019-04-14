import React, { Component } from 'react';
import './App.scss';
import CardBuilder from './components/card-builder/card-builder'
import CardPreview from './components/card-preview/card-preview'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardBuilder />
        <CardPreview />
      </div>
    );
  }
}

export default App;
