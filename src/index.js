import React from "react";
import {render} from "react-dom";
import { Router, Route, browserHistory, IndexRoute} from "react-router";

import About from './components/About';
import App from './App';
import Beer from './components/Beer';
import MailingListForm from './components/MailingListForm';
import Home from './components/Home';

import './index.css';

class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"/"} component={App} >
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
          <Route path="brews" component={Beer} />
          <Route path="join_mailing_list" component={MailingListForm} />
        </Route>
      </Router>
    );
  }
}

render(<AppRoutes />, window.document.getElementById('root'));
