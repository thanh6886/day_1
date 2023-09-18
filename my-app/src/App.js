import React  , { useState, useEffect } from "react";







function Logger(a){
      console.log(a)
      
}

function App(){

      const [name, setName] = useState('')

      

      return(
            <div>

                  <h1>{name || "hello"}</h1>
                  <input
                  type="radio"
                  aria-label="hello"
                  />

                  <button onClick={()=>{Logger(name)}}>ClickMe</button>
            </div>
      )
}




export default App;
