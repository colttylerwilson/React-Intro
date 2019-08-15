//create component
//this is a component
//file that holds the html logic and styling in one file
//self-contained piece of code
//create component and render to screen

//1. Always import React
//React compiles the html-javascript(jsx) to html
import React, {useState} from 'react';
import Tweet from './Tweet';

//2. Create component by writing function
function App() {

    //creating two states, setRed and setCount with variables isRed and count
    const [isRed, setRed] = useState(false);
    const [count, setCount] = useState(0);

    const [users, setUsers] = useState([
        {
            name: "Colt",
            message: "Hey its colt"
        },
        {
            name: "Joe",
            message: "You know me Joe"
        }
    ]);

    //create a function to increment
    const increment = () => {
        //setCount now takes count and increment it by 1
        setCount(count + 1);
        setRed(!isRed);
    }

    //add aditional logic
    function createMessage() {
        let rando = Math.floor(Math.random() * 4);
        console.log(rando);
        let message = "";
        switch (rando) {
            case 0:
                message = "It's too much work";
                break;
            case 1:
                message = "I'm working";
                break;
            case 2:
                message = "God dammit, I want a cig.";
                break;
            default:
                message = "Ey girl";
                break;
        }
        return message;
    }

    //Render all the components here
    //Our html is changing based on our state, no more fixed values
    return (
        <div className="app">
            {/**add some properties to tweet */}
            {users.map(user =>(
                <Tweet name={user.name} message={user.message} likes={110}/>
            ))}
            <Tweet name="Deniz" message={createMessage()} likes={125} />
            <Tweet name="Colt" message={createMessage()} likes={15} />
            <Tweet name="Rowena" message={createMessage()} likes={11} />
            <Tweet name="David" message={createMessage()} likes={12} />
            <button onClick={increment}>Increment</button>
            <h1 className={isRed ? "red" : ""}>{count}</h1>
            <h1 className={isRed ? "red" : ""}>Change my Color</h1>
        </div>
    );
}


//3. Export this file
export default App;