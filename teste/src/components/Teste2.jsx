import { useEffect, useState } from "react"

const Teste2 = (props) => {
    const [teste, setTeste] = useState(props.info[0])
    useEffect(()=>{
        setTeste(props.info[0])
    },[teste])
    console.log(props.info[0])
    return(
        <>
            <h1>{teste}</h1>
        </>
    )
}
export default Teste2