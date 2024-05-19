export function Greeting({isFirst}){
   if(isFirst){
    return(
        <h1>Välkommen som ny andvändare!</h1>
    )
    }else{
        return(
            <h1>Välkommen tillbaka!</h1>
        )
    }
}