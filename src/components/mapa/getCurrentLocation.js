// getCurrentLocation.js
export const getCurrentLocation = (onSuccess, onError) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  };
  