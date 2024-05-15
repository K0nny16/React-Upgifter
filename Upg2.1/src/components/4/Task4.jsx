import { useState } from "react";
import { Buttons } from "./Buttonsx.jsx";
import { ColorBox } from "./ColorBox.jsx";

export function Task4(){
    const [text,setText] = useState("");
    return(
        <>
            <Buttons setText={setText}/>
            <ColorBox text={text}/> 
        </>
    )
}