import React  , { useState, useEffect} from "react";
import Content from "./Content";

function App(){

  // const [show, setShow] = useState(false)
  // console.log("hello")
  // return(
  //   <div>
  //   <button onClick={()=>setShow(!show)}>click me</button>

  //   {show && <Content/>}

  //   </div>

  // )





  const  [count , setCount] = useState(0);
  function fibonacci(n){
      if(n<2){
         return n;
      }
      return fibonacci(n-1) + fibonacci(n-2);
  }
  const result = fibonacci(10);
  return (
      <>
        <p> {count}</p>
        <p> {result}</p>

        <button onClick={()=>{
          setCount(count+1)
        }}>
          Click
        </button>
      </>
  )

}








export default App;
