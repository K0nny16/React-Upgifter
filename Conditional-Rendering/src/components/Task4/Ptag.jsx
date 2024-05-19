export function Ptag({number}){
    let text;
    if(number < 10) text = "talet är mindre än 10!";
    else if(number > 50 && number < 60) text = "talet är mellan 50 och 60";
    else if(number > 100) text = "talet är större än 100!";
    return(
        <>
            <p>{text}</p>
        </>
    )
}