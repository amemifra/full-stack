import { setStore } from './state-management';

const headers = new Headers();

const requestInit = { 
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default' 
};

export const http = () => {
  return fetch('asset/rose.jpeg', requestInit)
  .then(response => response.blob())
  .then(blob => {
      const objectUrl = URL.createObjectURL(blob);
      setStore('objectUrl', objectUrl);
      setStore('showFlower', true);
      return true;
  })
  .then(r => r);
};