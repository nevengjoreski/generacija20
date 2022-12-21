import Student from "./components/Student"
import PersonIterator from "./components/PersonIterator"
import StudentClass from "./components/StudentClass"

import "./css/styles.css"

const App = () => {

  const name = "Mia Koluci"
  const age = 34
  const toShow = true
  const fruits = ['banana','apple', 'android' ]

  const student = {
    name,
    age,
    fruits,
  }

  const customStyle = {paddingLeft : "100px", color: "purple"}

  return (<>
      <div className="red">Hello World</div>
      <div style={{paddingLeft : "10px", color: "green"}}>Hello World</div>
      <div style={customStyle}>Hello World</div>

      <Student 
        fruits={fruits} 
        name={name} 
        age={age} 
        shouldTheComponentShow={toShow}/>

      <Student 
        fruits={["orage", "lemon", "lime"]} 
        name={"Svetle"} 
        age={44} 
        shouldTheComponentShow={true} />

    <hr /><hr /><hr />

    <PersonIterator />

    <hr /><hr /><hr />

    <StudentClass 
      fruits={fruits} 
      name={name} 
      age={age} 
      shouldTheComponentShow={toShow}
     />

    </>);
}

// function App() {
//   return (
//     <div>Hello World</div>
//   );
// }

export default App;
