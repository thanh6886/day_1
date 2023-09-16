# day_1
 
cách tạo 1 class Compoment 

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

props 

class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car model="Mustang"/>);


state là nơi bạn lưu trữ nhưng thành phân 
khi State thay đổi thì Component thay đổi

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}

react HOOK


"""""""""""useState *******

const [state, setState] = useState(initSate)


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


      const [counter, setCounter] = useState({
            name:"thanh",
            age: 21
      })
      const handleClick = ()=>{    
            setCounter((e) => ({
                  ...e,
                  address:'hello'   
            }))
      }