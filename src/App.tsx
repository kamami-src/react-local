import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/reset.css'
import './style/base.scss'

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
