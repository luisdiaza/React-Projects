'use strict';

var visibility = false;

var onToggleVisibility = function onToggleVisibility() {
    visibility = !visibility;

    // renderFunction.button.value = 'Hide details'
    renderFunction();
};

var renderFunction = function renderFunction() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onToggleVisibility },
            visibility ? 'Hide details' : 'Show details'
        ),
        visibility && //logical and
        React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey, these are some details you can now see!'
            )
        )
    );
    ReactDOM.render(template, app);
};

renderFunction();
