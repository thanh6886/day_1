import { useState , useEffect, useReducer} from "react"


const  initState = {
    loading: false,
    data: []
}

const  reducer = (state, action)=>{
      switch(action){
        case 'GET_USER_REQUET':
          return {
             ...state, 
             loading: true
          }
        case 'GET_USER_SUCCESS':
            return {
              ...state, 
              loading: false, 
              data: action.data
            }
        default:
          return 
      }
}



function Content(){
    const  [user, userDispatch] = useReducer(reducer, initState)

  const getUser = ()=>{

      userDispatch({
        type: 'GET_USER_REQUET'
      })

      fetch("https://thanh6886.github.io/usersAPI/usersAPI.json")
      .then((res)=>{
          return res.json()
      })
      .then(res=>{

          userDispatch({
            type: 'GET_USER_SUCCESS',
            data: res    
          })
      })
  }


    return (
      <>
      <button onClick={getUser}>res</button>
        <h1>hello</h1>
        {
          user.loading ? <p>loading...</p> : <p>{user}</p>
        }
        </>
    )
}


export default Content