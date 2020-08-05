import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login";
import AppNav from "./appnav";
import Dashboard from "./dashboard";

export default function WebRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <AppNav />
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}
