import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/reset.css'
import './style/base.scss'

function App() {
  return (
    <>
      <body>
        <div className="container">
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
        </div>
      </body>
    </>
  );
}

export default App;
