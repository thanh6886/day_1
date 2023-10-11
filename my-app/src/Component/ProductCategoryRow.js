import React, { useContext } from 'react'
import { Product_ } from '../context'


export default function ProductCategoryRow({category}) {


  return (
    <tr>
    <th colSpan="2">
      {category}
    </th>
  </tr>
  )
}
