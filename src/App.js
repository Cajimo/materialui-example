import React, { Fragment } from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Home from './components';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Home />
    </Fragment>
  );
}

export default App;
