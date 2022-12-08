import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const Dashboard = ({match}) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/crm`}/>
    <Route path={`${match.url}/crm`} component={asyncComponent(() => import('./CRM/index'))}/>
    <Route path={`${match.url}/crypto`} component={asyncComponent(() => import('./Crypto/index'))}/>
    <Route path={`${match.url}/listing`} component={asyncComponent(() => import('./Listing/index'))}/>
  </Switch>
);

export default Dashboard;
