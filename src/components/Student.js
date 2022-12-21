import PropTypes from 'prop-types';

const Student = (props) => {
    const { shouldTheComponentShow, name, age, fruits } = props

    //ternaren
    // if (shouldTheComponentShow) {
    //     console.log("true")
    // } else {
    //     console.log("false")
    // }

    // shouldTheComponentShow ? console.log("true") : console.log("false")
    
    // conditional rendering
    // if shouldTheComponentShow is true it will print the component
    // if shouldTheComponentShow is false it will return null ( not render anything )

    // if(!shouldTheComponentShow){
    //     return null
    // }

    // T F T F T F // T F

    // T T T F // T T T F

    // F T T T // F
    
    // converts object / array to JSON STRING
    // JSON.stringify(fruits)

    return shouldTheComponentShow && true && 
        <div>
            <h1>Student</h1>
            <div>Name : {name}</div>
            <div>Age : {age}</div>
            <div>ShouldShow : {shouldTheComponentShow}</div>
            <div>Fruits : {fruits.map(function (fruit){
                    return <li key={fruit}>{fruit}</li>
                })}
            </div>
            {/* <div>Fruits : {fruits.map(fruit => {
                    return <li>{fruit}</li>
                })}
            </div>
            
            <div>Fruits : {fruits.map(fruit => <li><b>{fruit}</b></li>)}</div> */}
        </div>
}

export default Student

Student.propTypes = {
    shouldTheComponentShow : PropTypes.bool, 
    name : PropTypes.string, 
    age : PropTypes.number, 
    fruits : PropTypes.arrayOf(PropTypes.string)
}