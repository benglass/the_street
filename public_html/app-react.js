import React from 'react';
import Main from './components/Main.jsx!';

var mainProps = {
  message: 'Hello There!',
  dataUrl: 'data.csv'
};

React.render(React.createElement(Main, mainProps), document.getElementById('app'));
