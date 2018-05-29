class IndecisionApp extends React.Component {
    constructor(props) { // the props in the constructor function is the same as the this.props in the render function
        super(props); //calling super without props will ensure you have access to this.props
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteIndividualOption = this.handleDeleteIndividualOption.bind(this);
        this.state = { //define state and set it equal to object
            options:[]
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options: options }))
            }
        }
        catch (e) {
            //do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length){//checks to see if old state object has a different length than current one
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    handleDeleteOptions() { //completely wipes options array
        this.setState(() => ({
            options: []
        }));
    }
    handleDeleteIndividualOption(optionToRemove) {
        this.setState ((prevState) => ({
            options: prevState.options.filter((option) => {
                /* filter method takes a callback function that return true to keep the elements within an array.
                   Returns false to remove an element within an array. It then returns a brand new array with only
                   the elements you want to keep
                */
                return optionToRemove !== option;
                /*Looks through every option user has submitted.
                Any option that is not the one currently being clicked to be removed, will not be deleted. */
            })
        }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];//this second const option variable is allowed to exist because it is function scope and not global
        alert(option);
    }
    handleAddOption(option) {
        if (!option) { //only runs if there is an empty string
            return 'Enter valid value to add item'
        }
        else if (this.state.options.indexOf(option) > -1) { //checks to see if option already exists in array (-1 means option doesn't exist at all in array)
            return 'This option already exists';
        }

        this.setState ((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle = {subtitle}/> {/*these are props that allow components to have access to data found in this parent component*/}
                <Action
                    hasOptions = {this.state.options.length > 0} /*returns true if the left operand is greater than the right*/
                    handlePick = {this.handlePick}
                />
                <Options
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteIndividualOption = {this.handleDeleteIndividualOption}
                />
                <AddOption
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        );
};
Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasOptions} // button will be disabled if there are no options
            >
                What Should I Do?
            </button>
        </div>
    );
};

 const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length == 0 && <p>Please add an option to get started</p>}
            {
                /* renders a new p tag for each option using map function (set text, set key)
                 option is the individual item in array
                 map gets called one time for each element in array and converts each item in some way
                 arrays have text values/comments that lets React determine what to rerender
                 However, when you have JSX inside of array React does not have those text values/comments
                 to fix this, attach a key and text prop (optionText) to each element */
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteIndividualOption = {props.handleDeleteIndividualOption}
                    />
                ))
            }
        </div>
    );
 };

const Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
            <button
                //arrow function gets called with e argument when button gets clicked. This will allow us to properly delete the individual object.
                onClick={(e) => {
                    props.handleDeleteIndividualOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {
    constructor (props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {//best to keep this function in this component
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState (() => ({
            error: error
        }));

        if (!error) {
            e.target.elements.option.value = ''; //ensures that when valid data is submitted, input gets wiped
        }

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>} {/* conditional and operator to print out error message*/}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" ></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
