import React  , { useState, useEffect } from "react";


function Button({tilte, click}){
            return(
                  <button onClick={click}>{tilte}</button>
            )
}
function App(){
      const [counter, setCounter] = useState(0)


      setTimeout(()=>{
                  setCounter((counter)=>{
                        return counter+1
                  })
      },100)
      return(
            <div>
                  <h1>{counter}</h1>
                  <Button
                  tilte="click me"
                  />
            </div>
      )
}



export default App;
