import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Projects from './pages/Projects';
import Github from './pages/Github';
import styled, { ThemeProvider } from 'styled-components';
import Experience from './pages/Experience';
import Home from './pages/Home';

const theme = {
  dark: {
    bg: 'white',
    fc: 'black'
  },
  light: {
    bg: 'black',
    fc: 'white'
  }
}

const GlobalContainer = styled.div`
  background-color: ${p => p.theme.bg};
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  color: ${p => p.theme.fc};
  & * {
    color: ${p => p.theme.fc};
  }
  transition: background-color 300ms ease-in, color 300ms ease-in;
  will-change: background-color, color;
`;

class App extends Component {
  render() {
    return (
      
      <Router>
        <Switch>
        <ThemeProvider theme={this.props.toggle ? theme.light : theme.dark}>
          <GlobalContainer theme={this.props.toggle ? theme.light : theme.dark}>
          <Route path="/" exact={true} component={() => <Home {...this.props}/>} />
          <Route path="/projects" component={Projects} />
          <Route path="/github" component={Github} />
          <Route path="/exp" component={Experience} />
          </GlobalContainer>
          </ThemeProvider>
        </Switch>
      </Router>
    );
  }
}

export default App;
