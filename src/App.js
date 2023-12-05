// App.js
import React from 'react';
import ResponsiveAppBar from './components/TopBar';
import DenunciaForm from './components/mapa/DenunciaForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <DenunciaForm />
    </div>
  );
};

export default App;
