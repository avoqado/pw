import { TransactionsPage } from "modules/transactions/TransactionsPage";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const UserApp: React.FC = () => (
  <Switch>
    <Route path="/" component={TransactionsPage} exact />
    <Route render={() => <Redirect to={"/"} />} />
  </Switch>
);

export default UserApp;
