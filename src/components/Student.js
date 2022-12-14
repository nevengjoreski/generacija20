
const Student = (props) => {
    //ternaren

    if (props.shouldTheComponentShow) {
        console.log("true")
    } else {
        console.log("false")
    }

    props.shouldTheComponentShow ? console.log("true") : console.log("false")
    
    // console.log(props)
    return <div>
        <h1>Student</h1>
        <div>Name : {props.name}</div>
        <div>Age : {props.age}</div>
        <div>ShouldShow : {props.shouldTheComponentShow}</div>
    </div>
}

export default Student