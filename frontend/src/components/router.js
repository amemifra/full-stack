import { render } from './render';
import { homepage } from './pages/homepage';
import { about } from './pages/about';

const routes = {
  '': homepage,
  about: about
};

const router = () => {
  const path = location.hash.length > 2 ? location.hash.substr(2) : '';
  if (routes[path]) {
    render(routes[path])
  }
}

export default window.onhashchange = router;