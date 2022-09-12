import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemCounter from "./ItemCounter"
import ItemList from "./ItemList";
import products from "./productsData";



const ItemListContainer = () => {
  const [counter, setCounter] = useState(0);
  const [itemsList, setItemsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoryId} = useParams();
  const handleCounterAdd = () => { setCounter(counter + 1) };
  const handleCounterRemove = () => { setCounter(counter - 1) };

  useEffect(() => {
    setTimeout(() => {
      if(!categoryId){
        setItemsList(products.productList);
      }
      else{
        setItemsList(products.productList.filter(i => i.category == categoryId));
      }
      setLoading(false);
    }, 2000);
  }, [categoryId]);

  return (
    <div>
      <div className="mt-5">
      {loading ? <p>Loading...</p> : <ItemList items={itemsList} />}  
        
      </div>
    </div>
  )
}
export default ItemListContainer