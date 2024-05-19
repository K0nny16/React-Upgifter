export async function getData(arg){
    let url;
    if(arg != undefined) url = `https://dog.ceo/api/breed/${arg}/images/random`;
    else url = "https://dog.ceo/api/breeds/image/random"
    const resp = await fetch(url);
    const data = await resp.json()

    return data.message
}   
export async function getStartPic(){
    const url = "https://dog.ceo/api/breeds/image/random";

    const resp = await fetch(url);
    const data = await resp.json();

    return data.message
}