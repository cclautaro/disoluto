import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import products from "./productsData";

const ItemDetailContainer = () => {

  const {id} = useParams();
  const [item, setItem] = useState({})

  useEffect(() => {
    getItems();
  }, [])
  

  const getItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(setItem(products.productData.find( i => i.id == id)));
      }, 2000);
    })
  }

  return (
    <div className="mt-5">
        <ItemDetail item = {item} />
      </div>
  )
}
export default ItemDetailContainer