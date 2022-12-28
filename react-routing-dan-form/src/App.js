import './App.css';

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <p>
        WELCOME !!!
      </p>
      <hr/>
      <Outlet />
      <p>
        BYE !!!
      </p>
    </div>
  );
}

export default App;
