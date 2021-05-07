import React from 'react';

import { Frame } from './components/Frame/Frame';
import { Home } from './containers/Home/Home';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Frame>
        <h2 className="App-title">Stopwatch</h2>
        <Home />
      </Frame>
    </div>
  );
}

export default App;
