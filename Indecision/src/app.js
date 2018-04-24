console.log('App.js is running!');

const object = {
    title: 'Dragonball',
    subtitle: 'Super',
    options: ['One', 'Two']
}


//JSX - JavaScript XML
const template = (
    <div>
        <h1>{object.title}</h1>
        {object.subtitle && <p>{object.subtitle}</p>}
        <p>{object.options.length > 0 ? 'Here are your options' : 'No options' }</p>

    </div>
);

const user = {
    name: 'Mike',
    age: '17',
    location: 'North Plainfield'
}

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

const app =  document.getElementById('app');

ReactDOM.render(template,app);
