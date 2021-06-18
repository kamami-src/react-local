import Nico1 from './images/nico_1.jpg';
import './style/reset.css'
import './style/base.scss'
import { Home } from './Home';
import { TitleMenu } from './TitleMenu';
import { TopImage } from './TopImage';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Router } from './router/Router';

function App() {
  return (
    <>
      <body>
        <div class="container">
          <BrowserRouter>
            <TitleMenu />
            <Router/>
          </BrowserRouter>
        </div>
      </body>
    </>
  );
}

export default App;
