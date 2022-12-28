import {Level2} from "./Level2"

export const Level1 = () => {

    

    console.log("level1 rerender")
    return <div>
        <span>Inside Lvl 1</span>
        
        <Level2/>
    </div>
}


export const Level11 = () => {

    return <div>
        Level 11
    </div>
}


export const Level111 = () => {

    return <div>
        Level 111
    </div>
}