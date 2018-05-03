'use strict';

console.log('App.js is running!');

var object = {
    title: 'Dragonball',
    subtitle: 'Super',
    options: ['One', 'Two']

    //JSX - JavaScript XML
};var template = //These are objects
React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        object.title
    ),
    object.subtitle && React.createElement(
        'p',
        null,
        object.subtitle
    ),
    React.createElement(
        'p',
        null,
        object.options.length > 0 ? 'Here are your options' : 'No options'
    )
);

var count = 0;
var addOne = function addOne() {
    //a variable, named addOne, set to a nameless function with no parameters that console logs stuff out
    count++;
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var app = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );

    ReactDOM.render(templateTwo, app);
};

renderCounterApp();
