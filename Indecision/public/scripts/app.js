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
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    ),
    React.createElement(
        'form',
        { onSubmit: onForm },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add Option'
        )
    )
);

var app = document.getElementById('app');
ReactDOM.render(template, app);
