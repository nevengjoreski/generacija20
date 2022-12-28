import LifecycleFuncComponent from "./components/LifecycleFuncComponent"
import LifecycleClassComponent from "./components/LifecycleClassComponent"
import { useState } from "react";

const App = () => {

  const [shoudShow, setShouldShow] = useState(true)

  return (<>
    <LifecycleFuncComponent />
    {/* { shoudShow && <LifecycleClassComponent />} */}
    
    <button 
      onClick={() => setShouldShow(!shoudShow)}
      >Hide Componet</button>
  </>);
}
export default App;
