# day_1
 


# Closure 

là hàm có thể ghi nhớ nơi nó dc tạo ra và truy cập dc biến ở ngoài phạm vi của nó





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






========== TWO-WAY binding ========
giàng buộc 2 chiều 


one-way ko thay giá trị nhưng ko thay đổi ui

function App(){

      const [name, setName] = useState('')
      console.log(name)
      return(
            <div>
                  <h1>{name || "hello"}</h1>
                  <input
                  
                  onChange={(e)=>{
                        return setName(e.target.value)
                  }}
                  />

                  <button onClick={() => setName("thành")}>ClickMe</button>
            </div>
      )
}

cách giải quyết thên  value={name}


khi này là two way



========= useEffect ======


// side effects  


useEffect(callback, [])


chỉ render lại 1 lần sau khi compomnet dc mous



--------cách hoạt động của usrEffect

call back luôn dc gọi sau khi Componment mounted


-------useEffect(callback)

gọi callback mỗi khi render

---------useEffect(callback, [])

gọi callback 1 lần 

---------useEffect(callback, [state])

gọi callback khi state thay đổi



1 cập nhập lại state 
2 cập nhập lại Dom 
3 render lại UI
4 gọi clearnup nếu deps thay đổi 
5 gọi  useEffect Callback


------clearup Func 
 luôn dc gọi trước khi compoment unmao

useEffect(()=>{
 return ()=>
 {

 }
})


# useState 

-- cập nhật lại 



# useCallback




