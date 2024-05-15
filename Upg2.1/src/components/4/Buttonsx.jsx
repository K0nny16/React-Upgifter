export function Buttons({setText}){

    function changeDiv(event){
        const change = event.target.innerText;
        setText(change);
    }

    return(
        <>
            <button onClick={changeDiv}>Red</button>
            <button onClick={changeDiv}>Blue</button>
            <button onClick={changeDiv}>Green</button>
        </>
    )
}