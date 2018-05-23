class VisibilityToggle extends React.Component {
    constructor (props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);//preserves the binding

        this.state = {
            visibility: false
        };

    }

    handleToggleVisibility () {
        this.setState((prevState)=>{
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render () {
        return (
            <div>
                <h1>Visbility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                    {/* if visibility is true, display hide details. if false, display show details */}
                </button>
                {this.state.visibility && ( //logical and
                    <div>
                        <p>Hey, these are some details you can now see!</p>
                    </div>
                )}
            </div>

        )
    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visibility = false;
//
// const onToggleVisibility = () => {
//     visibility = !visibility;
//
//
//     // renderFunction.button.value = 'Hide details'
//     renderFunction();
// };
//
// const renderFunction = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick = {onToggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && ( //logical and
//                 <div>
//                     <p>Hey, these are some details you can now see!</p>
//                 </div>
//             )}
//
//         </div>
//     );
//     ReactDOM.render(template,app);
// };
//
// renderFunction();
