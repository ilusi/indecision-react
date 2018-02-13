console.log('App.js is running');

// only render the subtitle (and p tag) if subtitle exists - locigal and operator
// render new p tag - if options.length > 0, show "Here are your options" or "no options"
const app = {
    title: 'INdecision App',
    subtitle: 'This is JSX from app.js, yo yo yo!',
    options: ['One', 'Two']
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        render();
    }
};

// Assg #1
// Create a render function that renders the new jsx
// call it right away
// call it after options array added to 

// Assg #2
// create "Remove All" button above list
// on click -> wipe the array -> rerender

const wipe = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
    // JSX (JS XML)
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <p>{app.options.length}</p>
            <button onClick={wipe}>Remove All</button>
            <ol>
                {/* map over app.options getting back an array of list (set key and text) */}
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();