export function Button({setButton,button}){
    function click(){
        setButton(!button);
    }

    return(
        <button onClick={click}>Change true/false</button>
    )
}