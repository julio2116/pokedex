import { useEffect, useState } from "react";
import styles from "../components/Home.module.css";
import EvolutionChain from './EvolutionChain.jsx'

const Teste = () => {
  const [count, setCount] = useState(1);
  const [info, setInfo] = useState({});
  const [poke, setPoke] = useState({});
  const [evolution, setEvolution] = useState({});
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${count}/`)
      .then((response) => response.json())
      .then((body) => setInfo(body));
    }, [count]);

  useEffect(()=>{
    if(info?.varieties){
    fetch(info.varieties[0].pokemon.url)
    .then(response => response.json())
    .then(body => setPoke(body))}
  }, [info])

  useEffect(()=>{
    if(info?.evolution_chain){
        fetch(info.evolution_chain.url)
        .then(response => response.json())
        .then(body => setEvolution(body))
    }
  }, [info])

  useEffect(()=>{
  let names =[];
    if(evolution?.chain?.species){
      names.push(evolution.chain.species.name);
    if(evolution?.chain?.evolves_to?.length > 0){
      names.push(evolution.chain.evolves_to[0].species.name);
    }
    if(evolution?.chain?.evolves_to[0]?.evolves_to?.length > 0){
      names.push(evolution.chain.evolves_to[0].evolves_to[0].species.name);
    }
  setNames(names)
  }},[evolution])

  return (
    <>
      {poke?.forms && (
        <>
          <span className={styles.pokedex}>
            <img className={styles.teste_img} src={`${poke.sprites.front_default}`} alt="" />
            <h1 style={{display:'inline'}}>{poke.forms[0].name}</h1>
            <span className={styles.buttons}>
              <button className={styles.button} onClick={() => {if (count > 1) setCount(poke.id - 1)}}>prev</button>
              <button className={styles.button} onClick={() => {if (count < 1025) setCount(poke.id + 1)}}>next</button>
            </span>
          </span>
          <EvolutionChain info={names} />
        </>
      )}
    </>
  );
};

export default Teste;