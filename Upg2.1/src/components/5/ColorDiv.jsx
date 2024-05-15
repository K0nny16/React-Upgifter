import { useState } from "react";

export function ColorDiv({numberGuess,targetNumber}){
    const [color,setColor] = useState("");
    const [text,setText] = useState("");

    if(targetNumber == numberGuess) {
        setColor("Green");
        setText("Correct!");
    }
    else{
        setColor("Red");
        setText("Wrong!");
    }
    return(
        <div className={color}>
            <h1>{text}</h1>
        </div>
    )
}