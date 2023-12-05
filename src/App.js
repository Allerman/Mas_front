// App.js
import React from 'react';
import ResponsiveAppBar from './components/TopBar';
import Mapa from './components/Mapa';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Mapa/>
    </div>
  );
};

export default App;
