import { useEffect,useState } from "react";
import { getData,getStartPic } from "./fetch.js";
export function DisplayDog({breed}){

    const [imgULR,setImgURL] = useState("");

    useEffect(() => {
        if(breed)
            getData(breed).then(img => setImgURL(img))
    },[breed]);

    useEffect(() => {
        getStartPic().then(img => setImgURL(img))
    },[]);

    return(
        <div>
            <img src={imgULR} alt=""/>
        </div>
    )
}