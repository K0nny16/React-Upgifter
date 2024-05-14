import { Scoreboard } from "./scoreboard.jsx"

export function App(){
    const struct = {
        score : [{name:"Karl",score:696969},{name:"Johan",score:420202},{name:"Clara",score:"over 9K"},{name:"Alesk",score:999999},{name:"Tester",score:1}]
    }

    return(
        <>
            <h1>HighScore!</h1>
            <Scoreboard user={struct}/>
        </>
    )
}