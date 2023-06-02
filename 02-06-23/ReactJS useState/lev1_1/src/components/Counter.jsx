import { useState } from "react";

const Counter = () => {

const [count, setCount] = useState(0)

    return ( 
        <>
        <section>
            <h1>Counter {count}</h1>
            <button onClick={() => setCount(count +1)}>+</button>
            <button onClick={() => setCount(count -1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </section>
        </>
    );
}
 
export default Counter;