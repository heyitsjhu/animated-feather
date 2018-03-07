import React, { Component } from 'react';
import ICONS from '../data/icons';
import './App.css';

import Icon from './Icon/Icon';

class App extends Component {
  renderIcons() {
    return ICONS.map( (icon) => <Icon name={icon} key={icon.toLowerCase()}/> );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Icon name="Feather" />
          <h1 className="App-title">Animated Feather</h1>
        </header>
        <div className="container">
          {this.renderIcons()}
        </div>
      </div>
    );
  }
}

export default App;
