import React  , { useState, useEffect } from "react";


function Render(c){
       return(
            <h2>{c}</h2>
       )
}





function Logger(a){
      console.log(a)
      Render(a)
      
}

function App(){

      const [name, setName] = useState('')

      

      return(
            <div>
                  <h1>{name || "hello"}</h1>
                  <input
                  value={name}
                  onChange={(e)=>{
                        return setName(e.target.value)
                  }}
                  />

                  <button onClick={()=>{Logger(name)}}>ClickMe</button>
            </div>
      )
}




export default App;
