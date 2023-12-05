// DenunciaForm.js
import React, { useEffect } from 'react';
import { getCurrentLocation } from './getCurrentLocation';

const DenunciaForm = () => {
  useEffect(() => {
    const onSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

      // Aqui você pode usar a biblioteca de mapas para renderizar o mapa.
      // Certifique-se de configurar corretamente a biblioteca de mapas.

      // Exemplo fictício com um elemento de mapa (substitua com sua lógica real):
      const mapElement = document.createElement('div');
      mapElement.style.width = '100%';
      mapElement.style.height = '400px';
      mapElement.innerHTML = `Mapa: ${latitude}, ${longitude}`;
      document.body.appendChild(mapElement);
    };

    const onError = (error) => {
      console.error('Erro ao obter a posição:', error.message);
    };

    getCurrentLocation(onSuccess, onError);
  }, []); // Executar apenas uma vez ao montar o componente

  // Seu formulário de denúncia
  return (
    <div>
      {/* Seu formulário aqui */}
    </div>
  );
};

export default DenunciaForm;
