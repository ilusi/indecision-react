console.log('App.js is running');

// only render the subtitle (and p tag) if subtitle exists - locigal and operator
// render new p tag - if options.length > 0, show "Here are your options" or "no options"
const app = {
    title: 'Introduction',
    subtitle: 'This is JSX from app.js, yo yo yo!',
    options: ['One', 'Two']
};

// JSX (JS XML)
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle ? <p>{app.subtitle}</p> : ''}
        <p>{app.options.length > 0 ? "Here are your options" : 'No options'}</p>
        <ol>
            <li>One</li>
            <li>Two</li>
        </ol>
    </div>
);

// Equivalent of above line (From babel's try it out)
// var template = React.createElement(
//     "p",
//     { id: "someid" },
//     "This is JSX from app.js, yo!!"
//   );

// Assignment#1: Create a templateTwo var JSX expression
// div
//  h1 -> Chip Salim
//  p -> Age: 40
//  p -> Location: Detroit
// Render templateTwo instead of template
const user = {
    name: 'Chip',
    age: 40,
    location: 'Detroit, MI'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}

const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(template2, appRoot);