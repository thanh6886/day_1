# day_1
 
# 1 comproment được render khi 1 props chuyền từ comproment cha bị thay đổi hoặc 1 state thay đổi

khi biến count thay đổi (state) thì App sẽ render lại IU hay thực hiện lại toàn bộ function fibonacci 


# vd

function App(){
  const  [count , setCount] = useState(0);
  function fibonacci(n){
      if(n<2){
         return n;
      }
      return fibonacci(n-1) + fibonacci(n-2);
  }
  const result = fibonacci(20);
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
# áp dụng kỹ thuật memoization để sử lý vấn đề trên
# ----- sử dụng bộ nhớ đệm để lưu trữ kết quả của các lần gọi làm để cố thể truy cập nhanh chóng hơn khi gọi các expensive func
# expensive function là 1 hàm gọi mà tiêu tốn nhiều tài nguyên do thực hiện 1 công việc lớn 

# sử dụng useMemo

là một React Hook cho phép bạn lưu trữ kết quả tính toán giữa các lần kết xuất lại.

useMemo sẽ lấy 1 funuc và trả về giá trị của func đó sau khi nó dc thực thi
tác dụng lớn nhất nâng cao hiệu năng cho IU
# useMemo sẽ trả về kết quả của việc thực hiện gọi hàm 

giải quyết bài toán trên 

const result = useMemo(()=>{
           fibonacci(20)
  }, []);


# React.memo ngăn việc render lại compronment con khi thằng cha nó thay đổi nếu tham số đầu vào không thay đổi 


có thể sử dụng useMemo thay cho useCallback

useMemo giữ cho một hàm không được thực thi lại nếu nó không nhận được một tập hợp các tham số đã được sử dụng trước đó. Nó sẽ trả về kết quả của một function. Sử dụng nó khi bạn muốn ngăn một số thao tác nặng hoặc tốn kém tài nguyên được gọi trên mỗi lần render.

useCallback giữ cho một hàm không được tạo lại lần nữa, dựa trên mảng các phần phụ thuộc. Nó sẽ trả về chính function đó. Sử dụng nó khi mà bạn muốn truyền fuction vào component con và chặn không cho một hàm nào đó tiêu thời gian, tài nguyên phải tạo lại.

# useCallback



# Closure 

là hàm có thể ghi nhớ nơi nó dc tạo ra và truy cập dc biến ở ngoài phạm vi của nó

# Scope là nơi mà biến hoặc hàm có thể truy cập vào và sử dụng/ tham chiếu được qua tên trực tiếp. Và ở ngoài scope đó thì biến hoặc hàm đó sẽ không thể nhìn được một cách trực tiếp nữa.
# Closure là một hàm hoặc một tham chiếu (hay còn gọi là một cái bao đóng) đi kèm với cái môi trường mà nó tham chiếu đến (khá là xoắn




# cách tạo 1 class Compoment 

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


# state là nơi bạn lưu trữ nhưng thành phân 
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


# """"""""""useState *******

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






# ========== TWO-WAY binding ========
giàng buộc 2 chiều 


 # one-way ko thay giá trị nhưng ko thay đổi ui

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



# ========= useEffect ======
1. cập nhật lại state
2. cập nhật lại Dom
3. render lại UI
4. gọi Cleanup  nếu dép thay đổi
5. gọi useEffect Callback 

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

# cleanup function luôn được gọi trước khi callback được gọi

useEffect(()=>{
 return ()=>
 {
    // clear unmoaus
 }
})


# useState 

-- cập nhật lại 

# useEffect
1 cập nhập lại state 
2 cập nhập lại Dom 
3 render lại UI
4 gọi clearnup nếu deps thay đổi 
5 gọi  useEffect Callback

# useLayoutEffect
1. cập nhật lại state 
2. cập nhật lại DOM
3. gọi clearnup nếu dép thay điỉu
4. gọi useLayoutEffect callback
5. render  lại


-- vấn đề nếu sử dụng useEffect thì kho deps thay đổi nó cập nhật vào dom rồi render lại ui trước khi gọi callback 
--  useLayoutEffect giải quyết vấn đề này do nó cách hoạt động khác nó render lại ui sau cùng 


# useRef 
vấn đề tạo ra 1 biến bên ngoài phạm vi khi UI bị render lại thì ko bị ảnh hưởng đến biến
useRef()  giá trị là undife
const ref  = useRef(100)

luôn trả về obj có (1 current)
ref.current  == 99  


# useReducer

là 1 bản nâng cấp của useState dùng trong trường hợp  local state của compoment phức tạp

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


