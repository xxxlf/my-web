import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// import Page1 from "./pages/page1";
// import Page2 from "./pages/page2";
// import Page2Item1 from "./pages/page2/item1";

const routers = [
  {
    name: "page1",
    path: "/page1",
    component: lazy(() => import("./pages/page1")),
    exact: true,
  },
  {
    name: "page2",
    path: "/page2",
    component: lazy(() => import("./pages/page2")),
    exact: true,
  },
  {
    name: "page2/item1",
    path: "/page2/item1",
    component: lazy(() => import("./pages/page2/item1")),
    exact: true,
  },
];

const Routers = () => (
  <Router>
    <Suspense fallback={<div>xxxlf loading...</div>}>
      <Switch>
        {routers.map(({ name, ...rest }) => {
          return <Route key={name} {...rest} />;
        })}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </Router>
);

export default Routers;
