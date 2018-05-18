let visibility = false;

const onToggleVisibility = () => {
    visibility = !visibility;


    // renderFunction.button.value = 'Hide details'
    renderFunction();
};

const renderFunction = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick = {onToggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && ( //logical and
                <div>
                    <p>Hey, these are some details you can now see!</p>
                </div>
            )}

        </div>
    );
    ReactDOM.render(template,app);
};

renderFunction();
