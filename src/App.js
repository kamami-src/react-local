import Nico1 from './images/nico_1.jpg';
import './App.css';
import { Home } from './Home';
import { Menu } from './Menu';
import { TopImage } from './TopImage';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Router } from './router/Router';

function App() {
  return (
    <>
      <body>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </body>
    </>
  );
}

export default App;
