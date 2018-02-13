'use strict';

var appRoot = document.getElementById('app');
var isVisible = true;

var toggleButton = function toggleButton() {
    isVisible = !isVisible;

    render();
};

var render = function render() {
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
            { onClick: toggleButton },
            !isVisible ? 'Show details' : 'Hide details'
        ),
        isVisible && React.createElement(
            'p',
            null,
            'Now you see me!'
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
