import { useState } from "react"


const LifecycleFuncComponent = () => {

    const [counter, setCounter] = useState(7)

    const [color, setColor] = useState("brown")
    // let counter = 7

    const increment = () => {
        setCounter(counter + 10)
    }

    console.log("render")    
    console.log("counter", counter)    

    

    return <div>
        counter : {counter}

        <br />
        <button onClick={increment}>Increment</button>
        <button 
            onClick={() => setCounter(counter + 10)}
        >Increment v2</button>

        <hr />

        <div style={{
            color: color
        }}>Text With Color</div>

        <button 
            onClick={() => setColor("green")}
        >change to green</button>
        
        <button 
            onClick={() => setColor("red")}
        >change to red</button>

    </div>
}

export default LifecycleFuncComponent