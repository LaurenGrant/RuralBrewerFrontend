import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import About from '../components/About';
import Beer from '../components/Beer';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Main from '../components/Main';
import NavBar from '../components/NavBar';

const AppRoutes = (
  <Route path="/" component={Main}>
    <Route path="home" component={Home} />
    <Route path="about" component={About} />
    <Route path="about" component={Beer} />
    <Route path="footer" component={Footer} />
    <IndexRoute component={NavBar} />
  </Route>
);

export const routes = (
  <Router routes={AppRoutes} />
);
