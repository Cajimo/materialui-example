import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Home from './components';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </Fragment>
  );
}

export default App;
