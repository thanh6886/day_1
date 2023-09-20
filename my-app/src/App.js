import React  , { useState, useEffect} from "react";






function App(){

      const [title,setTitle] = useState('')

      useEffect(()=>{
          
      })


      return(
            <div>
                  <h1></h1>
                  <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value) }
                  />
            </div>
      )
}







export default App;
