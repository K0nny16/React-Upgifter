import { useState } from "react";
import {DisplayDog} from "./Task1/DisplayDog.jsx";
import {Buttons} from "./Task1/Buttons.jsx";
export function App(){
    const [breed, setBreed] = useState("")
    return(
        <>
            <Buttons setBreed={setBreed}/>
            <DisplayDog breed={breed}/>
        </>
    )
}