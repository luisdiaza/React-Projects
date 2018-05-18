console.log('App.js is running!');

const object = {
    title: 'Dragonball',
    subtitle: 'Super',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    /*
        .target: points to the the element that the event started on. In this case, it is forms.
        .elements: contains a list of all elements indexed by name
        .option: located within form
    */

    if (option) { //Remember, an if statement executes if the condition is truthy. So if there is content inside option, the if statement will run
        object.options.push(option);
        e.target.elements.option.value = '';
        renderFunction();
    }
};

const onRemoveAll = () => {
    object.options = [];
    renderFunction();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * object.options.length);
    const option = object.options[randomNum];//this second const option variable is allowed to exist because it is function scope and not global
    alert(option);
    renderFunction();
};

const app =  document.getElementById('app');


const renderFunction = () => {
    //JSX - JavaScript XML
    const template = ( //These are objects
        <div>
            <h1>{object.title}</h1>
            {object.subtitle && <p>{object.subtitle}</p>}
            <p>{object.options.length > 0 ? 'Here are your options' : 'No options' }</p>
            <button disabled = {object.options.length === 0} onClick= {onMakeDecision}>What Should I Do?</button>
            <button onClick = {onRemoveAll}>Remove All</button>
            <ol>
                {
                    object.options.map((option) => {
                        return <li key={option}> {option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" ></input>
                <button>Add Option</button>
            </form>

        </div>
    );
    ReactDOM.render(template,app);//renders the intial application
};

renderFunction();//React doesn't render anything to the screen until ReactDom.render is called
                //When data changes, ReactDOM.render must be re-run for data to actually to update on screen
                //function doesn't run unless called
