import React  , { useState, useEffect } from "react";


function Button({tilte, click}){
            return(
                  <button onClick={click}>{tilte}</button>
            )
}


function index(){
      return 100
}



function App(){
      const [counter, setCounter] = useState(index)
      console.log(counter)
      const handleClick = ()=>{    
            setCounter(counter + 1)
      }
      return(
            <div>
                  <h1>{counter}</h1>
                  <Button
                  tilte="click me"
                  click={handleClick}
                  />
            </div>
      )
}



export default App;
