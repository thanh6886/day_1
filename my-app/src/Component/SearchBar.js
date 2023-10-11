import React, { useContext } from 'react'
import { Product_ } from '../context'
export default function SearchBar() {
  const {text, setText} = useContext(Product_)
  const hanedl = (e)=>{
     setText(e)
  }
  return (
    <form>
    <input
        title='text'
        placeholder='SearchBar...'
        value={text}
        onChange={(e)=>{
           hanedl(e.target.value)
        }}

    />
    <label>
        <input type='checkbox'/> 
        {" "}
        only show product in stock
    </label>
    </form>
  )
}


