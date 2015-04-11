import React from 'react';
import Router from 'react-router';
import App from './components/App.jsx!';
import Dashboard from './components/Dashboard.jsx!';
import OtherHandler from './components/Other.jsx!';

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Dashboard}/>
    <Route name="other" handler={OtherHandler}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});

export default Router;
