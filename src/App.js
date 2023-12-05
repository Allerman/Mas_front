// App.js
import React from 'react';
import SimpleBottomNavigation from './components/Botoes';
import ResponsiveAppBar from './components/TopBar';
import Mapa from './components/Mapa';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Mapa/>
      <SimpleBottomNavigation/>
    </div>
  );
};

export default App;
