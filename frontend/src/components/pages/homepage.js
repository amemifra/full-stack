import { getStore } from '../state-management';

const text = 'homepage';

export const homepage = `
    <h2>Ciao dal componente ${text}</h2>
    ${getStore()['showFlower'] ? '<img>' : ''}
`;
