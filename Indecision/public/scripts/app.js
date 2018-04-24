'use strict';

console.log('App.js is running!');

//JSX - JavaScript XML
var template = React.createElement(
  'p',
  null,
  'Does this change?!'
);
var app = document.getElementById('app');

ReactDOM.render(template, app);
