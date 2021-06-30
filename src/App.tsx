import './style/reset.css'
import './style/base.scss'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import { UserProvider } from './providers/UserProvider';

function App() {
  return (
    <>
      <body>
        <div className="container">
          <UserProvider>
            <BrowserRouter>
              <Router/>
            </BrowserRouter>
          </UserProvider>
        </div>
      </body>
    </>
  );
}

export default App;
