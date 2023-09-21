import React  , { useState, useEffect} from "react";
import Content from "./Content";

function App(){

  const [show, setShow] = useState(false)
  return(
    <React.StrictMode>
    <button onClick={()=>setShow(!show)}>click me</button>

    {show && <Content/>}

    </React.StrictMode>

  )
}








export default App;
