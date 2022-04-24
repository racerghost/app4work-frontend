import Form from "../components/Form";
import { useState } from "react";

function Home() {
    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    }
        const decrement = () => {
        setCounter(counter - 1);
    }
    return (
        <>
            <div>Welcome to App4Work!</div>
            <p>Counter: {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <Form />
        </>
    )
}

export default Home;