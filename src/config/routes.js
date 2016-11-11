import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './../App';
import About from '../components/About';
import Beer from '../components/Beer';
import Home from '../components/Home';

const AppRoutes = (
  <Route path="/" component={App}>
    <IndexRoute path="home" component={Home} />
    <Route path="about" component={About} />
    <Route path="brews" component={Beer} />
  </Route>
);

export const routes = (
  <Router routes={AppRoutes} />
);
