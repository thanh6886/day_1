import React  , { useState, useEffect} from "react";


const songsApi = "https://thanh6886.github.io/usersAPI/usersAPI.json";

function App() {
  const [courses, setCourses] = useState([]);

  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(()=>{
      const hanldScroll = ()=>{
            console.log(window.scrollY);
            setShow(window.scrollY >= 200)
      }
        window.addEventListener("scroll", hanldScroll)
  }, [])




  const fetchCourses = () => {
    fetch(songsApi)
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.songs);
      });
  };

  return (
    <div>
      {courses.map((element, index) => (
        <PostItem
          key={index}
          name={element.name}
          singer={element.singer}
          image={element.image}
          song={element.path}
        />
      ))}
    </div>
  );
}

function PostItem(props) {
  return (
    <div>
      <div className="listsong">
        <div className="song">
        <p><a href={props.song}></a> click</p>
          <h1>{props.name}</h1>
          <h2>{props.singer}</h2>
          <div>
            <img src={props.image} alt={`${props.name} cover`} />
          </div>
        </div>
      </div>
    </div>
  );
}









export default App;
