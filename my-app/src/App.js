import React from "react";

const arr = [
      {
        a:1
      },
      {
        a:2
      },
      {
        a:3
      }
]



class Car extends React.Component{

  
      render(){
        const html =   arr.map((e)=>{
          return( 
            <div  className="render">
                <h2>{e.a}</h2>
            </div>)
        })

        return( 
                         
          <div>
             <h1>hello</h1>
              { html} 
          </div>
          )
      }
}



export default Car;
