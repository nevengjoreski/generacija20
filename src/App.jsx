import {Level1}  from "./components/Level1"
import { useState } from "react"

const App = () => {
  const [show, setShow] = useState(true)
  console.log("App rerender")

  
  return (<div>
    
    <div>show : {show ? "true" : false }</div>
    <Level1 />
    <button 
            onClick={() => setShow(!show)}
            >change Show</button>
  </div>);
}
export default App;
