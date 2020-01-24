import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Turnstile from './components/Turnstile/Turnstile';
import Barrier from './components/Barrier/Barrier'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={`/turnstile`} component={Turnstile} />
          <Route path={`/barrier/`} component={Barrier} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
