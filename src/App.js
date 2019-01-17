import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Projects from './pages/Projects';
import Github from './pages/Github';
import styled from 'styled-components';
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
  flex-flow: column wrap;
  align-items: center;
  color: ${p => p.theme.fc};
  & * {
    color: ${p => p.theme.fc};
  }

  & .colorChange {
    background-color: ${p => p.theme.bg};
  }

  transition: background-color 300ms ease-in, color 300ms ease-in;
  will-change: background-color, color;
  width: 100%;
  position: relative;
`;

const App = (props) =>  {
    return (
      <Router>
        <Switch>
          <GlobalContainer theme={props.toggle ? theme.light : theme.dark}>
          <Route path="/" exact={true} component={() => <Home {...props}/>} />
          <Route path="/projects" component={Projects} />
          <Route path="/github" component={Github} />
          <Route path="/exp" component={Experience} />
          </GlobalContainer>
        </Switch>
      </Router>
    );
}

export default App;
