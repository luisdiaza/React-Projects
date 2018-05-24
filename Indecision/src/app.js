class IndecisionApp extends React.Component {
    constructor(props) { // the props in the constructor function is the same as the this.props in the render function
        super(props); //calling super without props will ensure you have access to this.props
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = { //define state and set it equal to state
            options:['Thing one', 'Thing two', 'thing four']
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

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action
                    hasOptions = {this.state.options.length > 0} /*returns true if the left operand is greater than the right*/
                    handlePick = {this.handlePick}
                />
                <Options
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions} // button will be disabled if there are no options
                >
                    What Should I Do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)

                    /* renders a new p tag for each option using map function (set text, set key)
                     option is the individual item in array
                     map gets called one time for each element in array and converts each item in some way
                     arrays have text values/comments that lets React determine what to rerender
                     However, when you have JSX inside of array React does not have those text values/comments
                     to fix this, attach a key and text prop (optionText) to each element */
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option){
            alert('handleAddOption');
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" ></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
