import React from "react";



const songsApi = "https://thanh6886.github.io/usersAPI/usersAPI.json"



function App(){
            return(
                  <div>
                        <PostItiem
                              name="Về Quê"
                              image="https://toigingiuvedep.vn/wp-content/uploads/2022/11/hinh-anh-gai-xinh-de-thuong-deo-kinh-400x600.jpg"
                        />
                  </div>
            )
}

function PostItiem(props){
      return(
            <div>
                <div className="listsong">
                    <div className="song">
                            <h1>{props.name}</h1>
                         <div>
                           <img src={props.image}/>
                         </div>
                   </div>
                </div>
            </div>
      )
}









export default App;


