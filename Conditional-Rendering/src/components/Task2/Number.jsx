import {Ptag} from "../Task4/Ptag.jsx";
export function Number({number}){
    let text;
    if(number%2 == 0) text = "Jämt!";
    else text = "Udda!"; 

    return(
        <>
            <h1>{text}</h1>
            <Ptag number={number}/>
        </>
    )
}