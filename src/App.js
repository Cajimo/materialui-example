import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Home from './components';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
    </Fragment>
  );
}

export default App;
