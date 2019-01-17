import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Projects from './pages/Projects';
import Github from './pages/Github';
import Experience from './pages/Experience';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/github" component={Github} />
          <Route path="/exp" component={Experience} />
        </Switch>
      </Router>
    );
  }
}

export default App;
