import React, { useEffect } from 'react';

function Mapa() {
  useEffect(() => {
    const carregarDenunciasDoJSON = (map) => {
      fetch('assets/json/denuncia.json')
        .then((response) => response.json())
        .then((data) => {
          adicionarMarcadoresNoMapa(map, data.denuncia);
        })
        .catch((error) => {
          console.error('Erro ao carregar o arquivo JSON:', error);
        });
    };

    const adicionarMarcadoresNoMapa = (map, denuncias) => {
      denuncias.forEach((denuncia) => {
        const latitude = parseFloat(denuncia.latitude);
        const longitude = parseFloat(denuncia.longitude);
        const textoDenuncia = denuncia.textoDenuncia;

        const customIcon = {
          url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
          scaledSize: new window.google.maps.Size(30, 30),
        };

        new window.google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
          title: textoDenuncia,
          icon: customIcon,
        });
      });
    };

    const handleLocationError = (error) => {
      switch (error.code) {
        case 1:
          alert('Permissão de localização negada. Por favor, habilite a localização.');
          break;
        case 2:
          alert('Localização não disponível no momento. Tente novamente mais tarde.');
          break;
        case 3:
          alert('Tempo limite da solicitação de localização expirado.');
          break;
        default:
          alert('Ocorreu um erro desconhecido ao obter a localização.');
      }
    };

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = parseFloat(position.coords.latitude);
          const longitude = parseFloat(position.coords.longitude);

          const mapOptions = {
            center: { lat: latitude, lng: longitude },
            zoom: 14,
          };

          const map = new window.google.maps.Map(
            document.getElementById('map'),
            mapOptions
          );

        //   const userMarker = new window.google.maps.Marker({
        //     position: { lat: latitude, lng: longitude },
        //     map: map,
        //     title: 'Sua Localização Atual',
        //   });

          carregarDenunciasDoJSON(map);
        },
        function (error) {
          handleLocationError(error);
        }
      );
    } else {
      alert('A geolocalização não é suportada neste navegador.');
    }
  }, []); // Executar apenas uma vez ao montar o componente

  return <div id="map" style={{ width: '100%', height: '100vh' }} />;
}

export default Mapa;
