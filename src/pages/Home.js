import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"
const Home = ()=>{
    const {dataDemo, setDataDemo} = useContext(DataContext)
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={()=>setDataDemo('dataDemo changed in home')}>Change dataDemo</button>
            <p>demoState: {dataDemo}</p>
        </div>
    )
}

export default Home