import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Page_1 from "./pages/Page_1";

const routers = [
  {
    name: "user",
    path: "/page1",
    component: Page_1,
    exact: true,
  },
];

const Routers = () => (
  <Router>
    <Switch>
      {routers.map(({ name, ...rest }) => {
        return <Route key={name} {...rest} />;
      })}
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default Routers;
