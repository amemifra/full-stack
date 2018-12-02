import './style.css';

const text = 'dinamicamente';
const router = `
<h2>Ciao da un file esterno ${text}</h2>
`;

const routerContainer = document.querySelector('#router-outlet');

routerContainer.innerHTML = router;
