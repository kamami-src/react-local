import './style/reset.css'
import './style/base.scss'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';

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
