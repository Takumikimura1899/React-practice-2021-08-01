import { BrowserRouter, Link } from 'react-router-dom';
import Router from './router/Router';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>Hello</h1>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/page1'>Page1</Link>
        <br />
        <Link to='/page2'>Page2</Link>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
