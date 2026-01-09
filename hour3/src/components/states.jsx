//state: data that controls IU and re-renders on change
//normal variavles do not rerender UI
let count=0;
function increment(){
    count++;
}

import {useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count + 1);
    }
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )

}