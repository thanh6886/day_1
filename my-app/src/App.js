import React, { useState, useEffect } from "react";

// const songsApi = "https://thanh6886.github.io/usersAPI/usersAPI.json";

// function App() {
//   const [courses, setCourses] = useState([]);
//       console.log(courses)

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = () => {
//     fetch(songsApi)
//       .then((response) => response.json())
//       .then((data) => {
//         setCourses(data.songs);
//       });
//   };

//   return (
//     <div>
//       {courses.map((element, index) => (
//         <PostItem
//           key={index}
//           name={element.name}
//           singer={element.singer}
//           image={element.image}
//           song={element.path}
//         />
//       ))}
//     </div>
//   );
// }

// function PostItem(props) {
//   return (
//     <div>
//       <div className="listsong">
//         <div className="song">
//         <p><a href={props.song}></a> click</p>
//           <h1>{props.name}</h1>
//           <h2>{props.singer}</h2>
//           <div>
//             <img src={props.image} alt={`${props.name} cover`} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


const handClick = ()=>{
            console.log("hello")
}

function Iteam({Click}){
            return(
                  <h1 onClick={Click}> cick me</h1>
            )
}

function App(){
      return(
            <div id="demo">
                  <Iteam
                        Click={handClick}
                  
                  />                  
           </div>
      )
}

export default App;
