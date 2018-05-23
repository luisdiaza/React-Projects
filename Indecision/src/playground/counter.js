class Counter extends React.Component {
    constructor (props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleAddOne () {
        alert('handleAddOne');
        console.log('handleAddOne');
    }
    handleMinusOne () {
        alert('handleMinusOne');
    }
    handleReset () {
        alert('handleReset');
    }
    render() {
        return(
            <div>
                <h1>Count: </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => { //a variable, named addOne, set to a nameless function with no parameters that console logs stuff out
//     count++;
//     renderCounterApp();
// };
//
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
//
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };
//
// const app =  document.getElementById('app');
//
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick = {addOne}>+1</button>
//             <button onClick = {minusOne}>-1</button>
//             <button onClick = {reset}>Reset</button>
//         </div>
//     );
//
//     ReactDOM.render(templateTwo,app);
// };
//
// renderCounterApp();
