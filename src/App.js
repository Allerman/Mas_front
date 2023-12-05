import ResponsiveAppBar from './components/TopBar';
import { isGeolocationSupported } from './components/mapa/geolocationSupport';
import DenunciaForm from './components/mapa/DenunciaForm';
import './App.css';

const App = () => {
  if (!isGeolocationSupported()) {
    console.log('Geolocalização não suportada');
    // Lidar com a geolocalização não suportada
  }

  return (
    <div className="App">
      <ResponsiveAppBar/>
      <DenunciaForm />
    </div>
  );
};
export default App;
