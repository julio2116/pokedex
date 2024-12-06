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
            <input style={{width:'200px'}}
            onChange={(event) => setUrlPokemon(event.target.value)}
            type="search" id="busca" list="paises" placeholder="Pesquisar por um pokémon"></input>
            {console.log(allNames)}
        </>
    )
}
export default Filter