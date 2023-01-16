import { useState } from "react";
import { Input } from "./components/Input"
import {DisplayDropdowns} from "./components/DisplayDropdowns"
const App = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [comment, setComment] = useState("")

  const [btnText, setBtnText] = useState("Show")

  const [fieldType, setFieldType] = useState("password")

// make a input field named comment
// displayed as text until character number is less < 8
// if more than 8 or 8, display textarea field instead

  return (<>

    <Input 
      type="text"
      placeholder="Username"
      value={username}
      onChange={e => setUsername(e.target.value)}
      name="username"
    />

    <Input 
      type={fieldType}
      placeholder="Password"
      value={password}
      name="password"
      btnText={btnText}
      onChange={e => {
        setPassword(e.target.value)
      }}
      onMouseDown={() => {
        console.log("onMouseDown")
        setFieldType("text")
        setBtnText("Hide")
      }}
      onMouseUp={() => {
        console.log("onMouseUp")
        setFieldType("password")
        setBtnText("Show")
      }}
    />

    <Input 
      type="text"
      placeholder="Comment"
      value={comment}
      onChange={e => setComment(e.target.value)}
      name="comment"
    />

      <hr /> <hr /> <hr />

      <DisplayDropdowns />

  </>);
}
export default App;
