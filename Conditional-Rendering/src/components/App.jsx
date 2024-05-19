import { useState } from "react";
import { Greeting } from "./Task1/Greeting.jsx";
import {Number} from "./Task2/Number.jsx";
import {Button} from "./Task3/Button.jsx";
export function App(){
    const [button, setButton] = useState(true);
    return(
        <>
            <Button setButton={setButton} button={button}/>
            <Greeting isFirst={button}/>
            <Number number={Math.floor(Math.random()*100)+1}/>
        </>
    )
}