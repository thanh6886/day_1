import React, { useState }   from "react";
import SearchBar from "./Component/SearchBar";
import ProductTable from "./Component/ProductTable";
import {PRODUCTS} from "./data/data"
import { Product_ } from "./context";




function App(){
  const [text, setText] = useState('')
  return(
    <div>
      <Product_.Provider value={{text, PRODUCTS, setText}}>
         <SearchBar/>
         <ProductTable/>
      </Product_.Provider>
    </div>

  )

}


export default App;
