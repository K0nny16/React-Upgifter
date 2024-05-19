export function Buttons({setBreed}){
    
    function newBreed(event){
        const race = event.target.innerText;
        setBreed(race.toLowerCase());
    }

    return(
        <>
            <button onClick={newBreed}>Boxer</button>
            <button onClick={newBreed}>Pitbull</button>
            <button onClick={newBreed}>Husky</button>
        </>
    )
}