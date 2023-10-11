import React, { useContext } from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import { Product_ } from '../context';



export default function() {
    const {text, PRODUCTS} = useContext(Product_)
    const arr = [];
    let checkNull = null;    
        PRODUCTS.forEach(element => {


            if(
                element.name.toLowerCase().indexOf(text.toLowerCase()) ===-1 && element.price.indexOf(text.toLowerCase()) === -1){
                return;
            }

            if(element.category !== checkNull){
                arr.push(
                    <ProductCategoryRow
                        category={element.category}
                        key={element.category}
                    />
                )
            }
            arr.push(
                <ProductRow
                   product = {element}
                   key={element.name}
                />
            )
            checkNull = element.category
        });


        
    

  return (
    <div>
     <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{arr}</tbody>
    </table>
        
    </div>
  )
}
