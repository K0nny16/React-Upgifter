import { useState } from "react";
import {Buttons} from "./Buttons.jsx";
import {ColorDiv} from "./ColorDiv.jsx";

export function Task5(){
    const [numberGuess,setNumber] = useState(0);
    const rndNumber = Math.floor(Math.random()*10)+1
    return(
        <>
            <Buttons setNumber={setNumber}/>
            <ColorDiv numberGuess={numberGuess} targetNumber={rndNumber}/>
        </>
    )
}