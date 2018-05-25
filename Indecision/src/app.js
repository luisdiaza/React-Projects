class IndecisionApp extends React.Component {
    constructor(props) { // the props in the constructor function is the same as the this.props in the render function
        super(props); //calling super without props will ensure you have access to this.props
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = { //define state and set it equal to object
            options:[]
        }
    }
    handleDeleteOptions() { //completely wipes options array
        this.setState( () => {
            return {
                options: []
            };
        });
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

        this.setState( (prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title = {title} subtitle = {subtitle}/> {/*these are props that allow components to have access to data found in this parent component*/}
                <Action
                    hasOptions = {this.state.options.length > 0} /*returns true if the left operand is greater than the right*/
                    handlePick = {this.handlePick}
                />
                <Options
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
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
                <h2>{props.subtitle}</h2>
            </div>
        );
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
            {
                props.options.map((option) => <Option key={option} optionText={option}/>)

                /* renders a new p tag for each option using map function (set text, set key)
                 option is the individual item in array
                 map gets called one time for each element in array and converts each item in some way
                 arrays have text values/comments that lets React determine what to rerender
                 However, when you have JSX inside of array React does not have those text values/comments
                 to fix this, attach a key and text prop (optionText) to each element */
            }
        </div>
    );
 };

const Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
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

        this.setState( () => {
            return {
                error: error
            };
        });
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
