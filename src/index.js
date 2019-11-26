import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.8.0';

// pages for this product
import Components from 'views/Components/Components.js';
import LandingPage from 'views/LandingPage/LandingPage.js';
import ProfilePage from 'views/ProfilePage/ProfilePage.js';
import LoginPage from 'views/LoginPage/LoginPage.js';
import IndexPage from 'views/IndexPage/IndexPage';
import ComplaintsPage from "views/ComplaintsPage/ComplaintsPage";
import GrievancesPage from "views/GrievancesPage/GrievancesPage";
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path='/landing-page' component={LandingPage} />
      <Route path='/profile-page' component={ProfilePage} />
      <Route path='/login-page' component={LoginPage} />
      <Route path='/complaints-page' component={ComplaintsPage} />
      <Route path='/grievances-page' component={GrievancesPage} />


      <Route path='/t' component={Components} />
      <Route path='/' component={IndexPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
