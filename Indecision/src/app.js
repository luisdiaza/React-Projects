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
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
        <form onSubmit={onForm}>
            <input type="text" name="option" ></input>
            <button>Add Option</button>
        </form>

    </div>
);

const app =  document.getElementById('app');
ReactDOM.render(template,app);
