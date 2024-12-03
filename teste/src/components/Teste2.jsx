import { useEffect, useState } from "react"

const Teste2 = (info) => {
    const [teste, setTeste] = useState(Array.from(info.info))
    useEffect(()=>{setTeste(Array.from(info.info))},[info])

    return(
        <>
            <h1>{teste}</h1>
        </>
    )
}
export default Teste2