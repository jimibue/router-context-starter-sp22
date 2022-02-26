import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"
const About = ()=>{
    const {dataDemo, setDataDemo} = useContext(DataContext)
    return (
        <div>
            <h1>About Page</h1>
            <button onClick={()=>setDataDemo('dataDemo changed in about')}>Change dataDemo</button>
            <p>dataDemo: {dataDemo}</p>
        </div>
    )
}

export default About