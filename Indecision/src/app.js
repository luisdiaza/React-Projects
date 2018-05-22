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
    render() {
        return (
            <div>
                <button>What Should I Do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {//renders a new p tag for each option using map function (set text, set key)
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)//option is the individual item in array
                    //gets called one time for each element in array
                    //map takes an array and converts each item in some way
                    //arrays have text values/comments that lets React determine what to rerender
                    //However, when you have JSX inside of array React does not have those text values/comments
                    //to fix this, attach a key and text prop to each element

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
    render() {
        return (
            <div>
                <p>AddOption component here</p>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
