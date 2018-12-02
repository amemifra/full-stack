import { http } from './http';
import { render } from './render';
import { homepage } from './pages/homepage'

const store = {
  showFlower: false,
  objectUrl: null
};

export const getStore = function () {
  return store;
}

export const setStore = function (attribute, data) {
  store[attribute] = data;
}

export default function () {
  http()
  .then(() => {
    render(homepage());
  })
}
