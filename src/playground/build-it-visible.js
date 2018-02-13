const appRoot = document.getElementById('app');
let isVisible = true;

const toggleButton = () => {
    isVisible = !isVisible;

    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleButton}>{!isVisible ? 'Show details' : 'Hide details'}</button>
            {isVisible && (
                <p>Now you see me!</p>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();