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
  getApi((data)=>{
      console.log(data)
  })





export default getApi;


