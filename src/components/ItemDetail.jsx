import { useEffect, useState } from "react"

const ItemDetail = ({item}) => {

    useEffect(() => {
      console.log(item);
      console.log(item.pictureURL);
    },[])
    
  return (
    <div>
        <ul>
            <li>{item.title}</li>
        </ul>
        <img src={item.pictureURL} alt="modelo de silla" />
    </div>
  )
}
export default ItemDetail