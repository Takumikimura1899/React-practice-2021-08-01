import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Hello</h1>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/page1'>Page1</Link>
        <br />
        <Link to='/page2'>Page2</Link>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/page1'>
            <Page1 />
          </Route>
          <Route path='/page2'>
            <Page2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
