import { useEffect, useState } from 'react'
import styles from '../components/Card.module.css'

const Card = ({info, positionLeft}) => {
    const [pokemon, setPokemon] = useState('');
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${info}`)
        .then(response => response.json())
        .then(body => setPokemon(body))
    }, [info])

    return (
        <>
        {pokemon &&
        (<>
        <div className={styles.card} style={{ left: `${positionLeft}` }}>
        <img className={styles.card_img} src={pokemon.sprites.front_default} alt="" />
        <div>{pokemon.forms[0].name}</div>
        </div>
        </>)}
        </>
    )
}
export default Card