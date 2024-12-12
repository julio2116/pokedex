import { useState, useEffect } from "react"
import styles from '../components/Filter.module.css'

const Filter = () =>{
    const [getPokemon, setGetPokemon] = useState({});
    const [urlPokemon, setUrlPokemon] = useState('')
    const [allNames, setAllNames] = useState('')

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302`)
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
        if(getPokemon?.results && urlPokemon.length > 0){
            a = filternames(getPokemon.results, urlPokemon);
        }
        setAllNames(a);
    }, [getPokemon])
    function handleForm(e){
        e.preventDefault();
        console.log(e.target[0].value);
    }

    return (
        <>
        <form action="" onSubmit={handleForm}>
            <input style={{width:'200px'}}
            onChange={(event) => setUrlPokemon(event.target.value)}
            type="search" placeholder="Pesquisar por um pokémon"></input>
            {console.log()}

        </form>
            {allNames[0]?.name &&
            (<>
                <ul className={styles.filter_poke_list}>
                    {allNames.map((pokemon, index)=>{
                    return <>
                    <li className={styles.filter_itemlist} key={index}>{pokemon.name}</li>
                    </>})}
                </ul>
            </>)}
        </>
    )
}
export default Filter