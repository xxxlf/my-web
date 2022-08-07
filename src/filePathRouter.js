// 解析文件路径生成react router
import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

Array.prototype.subarray = function (start, end) {
  if (!end) end = this.length;
  if (end < 0) end = this.length + end + 1;
  return [...this].slice(start, end);
};

const routers = [];

const modulesFiles = require.context("./pages", true, /index\.jsx$/);

modulesFiles.keys().forEach((filename) => {
  let routerPath = filename
    .split("/")
    .subarray(1, -1)
    .reverse()
    .subarray(1, -1)
    .reverse()
    .join("/");
  const path = `/${routerPath}`;
  routers.push({
    name: routerPath,
    path,
    component: lazy(() => import(`./pages${path}`)),
    exact: true,
  });
});

export default () => {
  return (
    <Suspense fallback={<div>xxxlf loading...</div>}>
      <Switch>
        {routers.map(({ name, ...rest }) => {
          return <Route key={name} {...rest} />;
        })}
        <Redirect to="/aboutReact" />
      </Switch>
    </Suspense>
  );
};
