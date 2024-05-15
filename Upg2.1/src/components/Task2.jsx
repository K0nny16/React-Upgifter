import { useState } from "react";

export function CounterBtn(){
    const [counter, setCounter] = useState(0);
    const [color, setColor] = useState("blue");
    function increaseCount(){
        setCounter(counter+1);
    }
    function changeColor(){
        setColor("pink");
    }
    function changeBack(){
        setColor("blue");
    }
    return(
        <>
            <button onClick={increaseCount} onMouseEnter={changeColor} onMouseLeave={changeBack} className={color}>Click Click!</button>
            <h1>{counter}</h1>
        </>
    )
}