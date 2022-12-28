import {Level3} from "./Level3"

export const Level2 = () => {
    
    console.log("level2 rerender")

    return <div>
        <span>Level 2</span>
        
        <Level3 />
        <Level3 />
        <Level3 />
    </div>
}

