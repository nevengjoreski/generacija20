import { useEffect, useState } from "react"


const LifecycleFuncComponent = () => {

    const [counter, setCounter] = useState(7)

    const [color, setColor] = useState("brown")
    // let counter = 7

    const increment = () => {
        setCounter(counter + 10)
    }

    console.log("render")    
    console.log("counter", counter)    

    console.log("like a constructor")

    const [todos, setTodos] = useState([])

    useEffect(() => {
        // not with every rerender
        console.log("like a componetDidMount")
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
            .then(json => setTodos(json))

        return () => {
            console.log("like a componentWillUnmount")
        }
    },[])

    return <div>
        counter : {counter}
        <pre>{JSON.stringify(todos, null, 2)}</pre>
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