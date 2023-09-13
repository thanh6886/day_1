import React from "react";



const songsApi = "https://thanh6886.github.io/usersAPI/usersAPI.json"



function getApi(callback){
      fetch(songsApi)
      .then((data)=>{
          return data.json()
      })
      .then((data)=>{
            return data.songs
      })
      .then(callback)
}



// function RenderSong(data){
//     data.map((song)=>{
//               return(
//                   <div className="listsong">
//                         <div className="song">
//                               <h1>{song.name}</h1>
//                         </div>
//                         <div>
//                               <p>{song.image}</p>
//                         </div>
//                   </div>)
//     })
// }



function App(){
  return(
        <div>
          {getApi((data)=>{


                <div>
                   <h1>{data.name}</h1>
                   <p>{data.singger}</p>
                </div>
                
          })}
        </div>
  )

}




export default App;


