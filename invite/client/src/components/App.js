import React from 'react';
import '../styles/invitee.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Invitee from './Invitee'
import Users from './Invitee';
import Going from './Going';
import NotGoing from './NotGoing'
import {BrowserRouter as Router, Route } from 'react-router-dom';
export default () => <div className="appContainer">
  <Provider store={store}>
    

    <Router>
      <Route path="/" exact component={Users} />
      <Route path="/going" exact component={Going} />
      <Route path="/notgoing" exact component={NotGoing} />
    </Router>


  </Provider>
</div>
