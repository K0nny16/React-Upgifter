export function Buttons({setNumber}){
    function updateNumber(event){
        const number = event.target.innerText;
        setNumber(number);
    }
    return(
        <>
            <button onClick={updateNumber}>1</button>
            <button onClick={updateNumber}>2</button>
            <button onClick={updateNumber}>3</button>
            <button onClick={updateNumber}>4</button>
            <button onClick={updateNumber}>5</button>
            <button onClick={updateNumber}>6</button>
            <button onClick={updateNumber}>7</button>
            <button onClick={updateNumber}>8</button>
            <button onClick={updateNumber}>9</button>
            <button onClick={updateNumber}>10</button>
        </>
    )
}