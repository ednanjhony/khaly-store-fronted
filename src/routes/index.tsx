import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Cart from '../pages/Cart';
import Dashboard from '../pages/Dashboard';
import DetailsRequest from '../pages/DetailsRequest';
import ForgotPassword from '../pages/ForgotPassword';
import Lingirie from '../pages/Lingerie';
import MyAccount from '../pages/MyAccount';
import MyRequests from '../pages/MyRequests';
import ShowDetails from '../pages/ShowDetails';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/cart" component={Cart} />
    <Route path="/detailsRequest" component={DetailsRequest} />
    <Route path="/forgot" component={ForgotPassword} />
    <Route path="/lingirie" component={Lingirie} />
    <Route path="/myAccount" component={MyAccount} />
    <Route path="/myRequests" component={MyRequests} />
    <Route path="/showDetails" component={ShowDetails} />
    <Route path="/signIn" component={SignIn} />
    <Route path="/signUp" component={SignUp} />
  </Switch>
);

export default Routes;
