import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { NutShell } from './NutShell'
import './index.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NutShell />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);