import axios from "axios";
import { useEffect, useState } from "react";


function Axios () {
    const [ data, setData ] = useState("")

    useEffect(() => {
        axios
        .get("https://6342266c20f1f9d7997e5353.mockapi.io/todos")
        .then ((res) => {
            console.log(res.data)
            setData(res.data.abilities[0].ability.name)
        })
        .catch ((err) => {
            setData("")
        })
    }, []); 

    return (
        <div>
            <h3>{data}</h3>
        </div>
    )
}

export default Axios;