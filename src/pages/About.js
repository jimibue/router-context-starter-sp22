import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"
const About = ()=>{
    const {dataDemo, setDataDemo} = useContext(DataContext)
    return (
        <div>
            <h1>About Page</h1>
            <button onClick={()=>setDataDemo('changed in about')}>change</button>
            <p>demoState: {dataDemo}</p>
        </div>
    )
}

export default About