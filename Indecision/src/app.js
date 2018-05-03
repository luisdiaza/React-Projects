console.log('App.js is running!');

const object = {
    title: 'Dragonball',
    subtitle: 'Super',
    options: ['One', 'Two']
}


//JSX - JavaScript XML
const template = ( //These are objects
    <div>
        <h1>{object.title}</h1>
        {object.subtitle && <p>{object.subtitle}</p>}
        <p>{object.options.length > 0 ? 'Here are your options' : 'No options' }</p>

    </div>
);

let count = 0;
const addOne = () => { //a variable, named addOne, set to a nameless function with no parameters that console logs stuff out
    console.log('addOne');
};

const minusOne = () => {
    console.log('minusOne');
};

const setupReset = () => {
    console.log('reset');
};


const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick = {addOne}>+1</button>
        <button onClick = {minusOne}>-1</button>
        <button onClick = {reset}>Reset</button>
    </div>
);


const app =  document.getElementById('app');

ReactDOM.render(templateTwo,app);
