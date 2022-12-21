

function calc( a, b ) {

    return a + b.age
}

const num = 10
const obj = {
    age : 20
}

calc(asd, asdd)


function calcNamedParams({ number, object }) {
    return number + object.age
}

calcNamedParams({number : num, object : obj})