// getCurrentLocation.js
export const getCurrentLocation = (onSuccess, onError) => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    onError({ message: 'Geolocalização não suportada pelo navegador.' });
  }
};
