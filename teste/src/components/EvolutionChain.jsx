import styles from '../components/EvolutionChain.module.css'
import Card from './Card.jsx'
import { useEffect, useState } from "react"

const EvolutionChain = ({info}) => {
    const [teste, setTeste] = useState(Array.from(info))
    useEffect(()=>{setTeste(Array.from(info))},[info])
    return(
        <>
        <div className={styles.container} style={{ maxWidth: '100vw' }}>
            {teste.map((item, index)=>{return <Card key={index} info={item} positionLeft={`${index * -45}px`} i={index} />})}
        </div>
        </>
    )
}
export default EvolutionChain