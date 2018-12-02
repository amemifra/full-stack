import './style.css';
import router from './components/router';

router();

const headers = new Headers();

const init = { 
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default' 
};

fetch('asset/rose.jpeg', init)
.then(response => response.blob())
.then(blob => {
    console.log(blob)
    const img = document.querySelector('img');
    const obj = URL.createObjectURL(blob);
    img.src = obj;
});
