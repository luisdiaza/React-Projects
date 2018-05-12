'use strict';

console.log('App.js is running!');

var object = {
    title: 'Dragonball',
    subtitle: 'Super',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    /*
        .target: points to the the element that the event started on. In this case, it is forms.
        .elements: contains a list of all elements indexed by name
        .option: located within form
    */

    if (option) {
        //Remember, an if statement executes if the condition is truthy. So if there is content inside option, the if statement will run
        object.options.push(option);
        e.target.elements.option.value = '';
        renderFunction();
    }
};

var onRemoveAll = function onRemoveAll() {
    object.options = [];
    renderFunction();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * object.options.length);
    var option = object.options[randomNum];
    alert(option);
    renderFunction();
};

var app = document.getElementById('app');

var renderFunction = function renderFunction() {
    //JSX - JavaScript XML
    var template = //These are objects
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
            'button',
            { disabled: object.options.length === 0, onClick: onMakeDecision },
            'What Should I Do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            object.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    ' ',
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, app); //renders the intial application
};

renderFunction(); //React doesn't render anything to the screen until ReactDom.render is called
//When data changes, ReactDOM.render must be re-run for data to actually to update on screen
