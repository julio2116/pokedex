import styles from '../components/EvolutionChain.module.css'
import Card from './Card.jsx'
import { useEffect, useState } from "react"

const EvolutionChain = ({info}) => {
    const [teste, setTeste] = useState(Array.from(info))
    useEffect(()=>{setTeste(Array.from(info))},[info])
    console.log(info)
    return(
        <>
        <div className={styles.container} style={{ maxWidth: `${(teste.length - 1) * 170 + 210}px`, height: `310px` }}>
            {teste.map((item, index)=>{return <Card key={index} info={item} positionLeft={`${index * 170}px`} i={index} />})}
        </div>
        </>
    )
}
export default EvolutionChain