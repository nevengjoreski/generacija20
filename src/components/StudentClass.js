import { Component } from "react"

export default class StudentClass extends Component {

    ime = "Trajce"

    render() {

        const { shouldTheComponentShow, name, age, fruits } = this.props

        console.log(this.ime)

        return <div>
            <h1>Student</h1>
            <div>Name : {name}</div>
            <div>Age : {age}</div>
            <div>ShouldShow : {shouldTheComponentShow}</div>
            <div>Fruits : {fruits.map(function (fruit){
                    return <li key={fruit}>{fruit}</li>
                })}
            </div>
        </div>
    }

}