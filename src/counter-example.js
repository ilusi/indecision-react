console.log('App.js is running');

// only render the subtitle (and p tag) if subtitle exists - locigal and operator
// render new p tag - if options.length > 0, show "Here are your options" or "no options"
const app = {
    title: 'Introduction',
    subtitle: 'This is JSX from app.js, yo yo yo!',
    options: ['One', 'Two']
};

let count = 0;
let myId = 'someId';
let addOne = () => {
    count++;
    console.log('addOne', count)
    renderCounterApp();
};

let minusOne = () => {
    count--;
    console.log('minusOne', count)
    renderCounterApp();
};

let reset = () => {
    count = 0;
    console.log('reset', count)
    renderCounterApp();
};

// JSX (JS XML)
// const template = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne} id="{someId}" className="button">+1</button>
//         <button onClick={minusOne} id="{someId}" className="button">-1</button>
//         <button onClick={reset} id="{someId}" className="button">reset</button>
//     </div>
// );
// console.log(template);

// Challenge
// make 2 buttons to register
// 1. minusOne
// 2. reset  


const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} id="{someId}" className="button">+1</button>
            <button onClick={minusOne} id="{someId}" className="button">-1</button>
            <button onClick={reset} id="{someId}" className="button">reset</button>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderCounterApp();