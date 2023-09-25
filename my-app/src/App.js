import React  , { useState, useEffect} from "react";
import Content from "./Content";

function App(){

  const [show, setShow] = useState(false)
  return(
    <div>
    <button onClick={()=>setShow(!show)}>click me</button>

    {show && <Content/>}

    </div>

  )

}








export default App;
