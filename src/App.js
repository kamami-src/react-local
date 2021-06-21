import './style/reset.css'
import './style/base.scss'
import { TitleMenu } from './TitleMenu';
import { BrowserRouter } from 'react-router-dom';
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
