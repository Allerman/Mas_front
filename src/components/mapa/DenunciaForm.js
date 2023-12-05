// DenunciaForm.js
import React, { useEffect } from 'react';
import { getCurrentLocation } from './getCurrentLocation';

const DenunciaForm = () => {
  useEffect(() => {
    const onSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      // Faça algo com as coordenadas, como enviar para o servidor de denúncias
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
