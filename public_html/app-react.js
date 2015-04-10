import React from 'react';
import Main from './components/Main.jsx!';

var mainProps = {
  message: 'Hello There!'
};

React.render(React.createElement(Main, mainProps), document.getElementById('app'));
