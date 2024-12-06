import { useState, useEffect } from "react"

const Filter = () =>{
    const [getPokemon, setGetPokemon] = useState({});
    const [urlPokemon, setUrlPokemon] = useState('')
    const [allNames, setAllNames] = useState('')

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000`)
        .then(response => response.json())
        .then(body => setGetPokemon(body))
    },[urlPokemon]);

    const filternames = (listItens, exemplo) => {
        console.log(listItens[0].name)
        let result = listItens.filter((valor) => {
            exemplo = exemplo.toLowerCase();
            return valor.name.includes(exemplo);
        })
        
        return result
    }
    useEffect(()=>{
        let a = []
        if(getPokemon?.results){
            a = filternames(getPokemon.results, urlPokemon);
        }
        setAllNames(a);
    }, [getPokemon])


    return (
        <>
            <input onChange={(event) => setUrlPokemon(event.target.value)} type="search" id="busca" list="paises"></input>
            <datalist name="pokemon" id="pokemon">
                {getPokemon?.results &&
                (getPokemon.results.map((item, index)=>{return <><option value={item.url} key={index}>{item.name}</option></>}))}
                {console.log(allNames)}
            </datalist>
        </>
    )
}
export default Filter