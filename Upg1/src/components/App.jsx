import { AllButtButtons } from "./AllButtButtons.jsx";
import {Buttons} from "./buttons.jsx";

export function App(){
    gameOver = {
        name:"Johan",
        score:99,
        cod:"Slag till benet."
    }
    return(
        <>
            <AllButtButtons user={gameOver}/>
            <Buttons/>
        </>
    );    
}