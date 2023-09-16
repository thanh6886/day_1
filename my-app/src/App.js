import React  , { useState, useEffect } from "react";


function Button({tilte, click}){
            return(
                  <button onClick={click}>{tilte}</button>
            )
}





function App(){
      const [counter, setCounter] = useState({
            name:"thanh",
            age: 21
      })
      const handleClick = ()=>{    
            setCounter((e) => ({
                  ...e,
                  address:'hello'   
            }))
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
