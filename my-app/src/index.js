import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


const danhsach = [
  {
    id:1,
    name:"thanh",
    age:21
  },
  {
    id:2,
    name:"java",
    age:22
  }
]


function  Tpp() {
   danhsach.map((e)=>{
    return(
    <React.Fragment>
    <h1>{e.id}</h1>
    <ul>
       <li>{e.name}</li>
      <li>{e.age}</li>
    </ul>
    </React.Fragment>
)
})
}


root.render(<Tpp/>)




reportWebVitals();
