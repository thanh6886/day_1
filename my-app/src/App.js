import React from "react";



const danhsach = [
          {
            id:1,
            name:"thanh",
            age:21
          },
          {
            id:2,
            name:"java",
            age:22
          }
]


function  App() {
      danhsach.map((e)=>{
        return(
          <React.Fragment>
            <h1>{e.id}</h1>
            <ul>
               <li>{e.name}</li>
              <li>{e.age}</li>
            </ul>
            </React.Fragment>
        )
      })
}


export default App;
