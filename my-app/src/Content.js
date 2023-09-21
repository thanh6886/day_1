import { useState , useLayoutEffect, useEffect} from "react"




const tabs = ["name", "singer", "path"]





function Content(){

    const [api, setApi] = useState([])
    const [type , setType] = useState("")




    useEffect(()=>{
        console.log(type)
    }, [type])

  

    return (
        <div>
            {
                tabs.map((element, index)=>{
                    return(
                        <button 
                            key={index} 
                            onClick={()=>setType(element)}
                        
                        >
                            {element}
                        </button>
                    )
                })
            }
        </div>
    )
}


export default Content