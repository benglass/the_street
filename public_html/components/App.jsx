import React from 'react';
import Router from 'react-router';

var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="other">Other!</Link></li>
          </ul>
          Logged in as Nobody
        </header>

        <RouteHandler/>
      </div>
    );
  }
});

export default App;
