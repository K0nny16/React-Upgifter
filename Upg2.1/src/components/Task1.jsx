import { useState } from "react";

export function Button(){
    const [value, setValue] = useState(0);

    function roll(){
        const random = Math.floor(Math.random()*6)+1;
        setValue(random);
    }

    return(
        <>
            <button onClick={roll} >Roll</button>
            <h2>{value}</h2>
        </>
    )
}