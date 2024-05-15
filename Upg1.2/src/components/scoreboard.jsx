export function Scoreboard({user}){
    const {score} = user;
    return(
        <>
            <ul>
                {score.map(person => (
                        <>
                            <li>{person.name}</li>
                            <li>{person.score}</li>
                            <hr/>
                        </>
                    )
                )}
            </ul>
        </>
    )
}