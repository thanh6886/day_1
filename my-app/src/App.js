import React  , { useState} from "react";


function App(){

     const [list, setList] = useState([])
     const [input, setInput] = useState('')


      function handlClick(e){
            console.log(e)
            setList(prev =>[...prev, input])
            setInput('')
      }





      return(
            <div style={{padding: 32}}>
                  <div>
                        <p>danh sách </p>
                  </div>
                        <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        
                        />
                        <button onClick={()=>handlClick(input)}>ADD</button>

                        <div className="list">
                                    <ul>{
                                          list.map((elemnet, index)=>{
                                                return(
                                                      <li key={index}>
                                                            {elemnet}
                                                      </li>
                                                )
                                          })
                                          }
                                         
                                    </ul>
                        </div>
            </div>
      )
}







export default App;
