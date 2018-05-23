const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
};

// const getName = obj.getName.bind(obj);
const getName = obj.getName;

console.log(obj.getName());
console.log(getName());




class IndecisionApp extends React.Component {
    render() {

        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'thing four'];

        return (
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action />
                <Options options = {options}/>
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
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I Do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert('handleRemoveAll');
        // console.log(this.props.options);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
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
