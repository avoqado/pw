import { LandingPage } from "modules/landing/LandingPage";
import { LoginPage } from "modules/profile/LoginPage";
import { RegisterPage } from "modules/profile/RegisterPage";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const GuestApp: React.FC = () => (
  <Switch>
    <Route path="/" component={LandingPage} exact />
    <Route path="/register" component={RegisterPage} exact />
    <Route path="/login" component={LoginPage} exact />
    <Route render={() => <Redirect to={"/"} />} />
  </Switch>
);

export default GuestApp;
