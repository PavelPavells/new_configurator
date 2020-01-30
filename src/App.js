import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import Turnstile from './components/Turnstile/Turnstile';
import Barrier from './components/Barrier/Barrier';
import Main from './components/Main/Main';
import './App.css';

class App extends React.Component {
  render() {
    //console.log(store.getState())
    //console.log(this.props)
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route path={`/turnstile`} component={Turnstile} />
              <Route path={`/barrier`} component={Barrier} />
              <Route path={`/main`} component={Main} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
