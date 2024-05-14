export function AllButtButtons({user}){
    const{name,score,cod} = user;
    return(
        <>
            <h1>GAME OVER</h1>
            <h3>{name}</h3>
            <p>{score}</p>
            <p>{cod}</p>
        </>
    )
}