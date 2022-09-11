import { useEffect, useState } from "react"

const ItemDetail = ({item}) => {
    
  return (
    <div>
        <ul>
            <li>{item.title}</li>
            <li>{item.category}</li>
            <li>{item.price}</li>
        </ul>
        {/* {item.pictureURL != undefined ?<img src={require(item.pictureURL)} alt="modelo de silla" /> : null} */}
        
    </div>
  )
}
export default ItemDetail