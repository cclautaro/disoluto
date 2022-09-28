import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore} from "firebase/firestore";

const ItemDetailContainer = () => {

  const { id } = useParams();
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getItems();
  }, [])

  useEffect(() => {
    if(item){
      setLoading(false);
    }
  }, [item])


  const getItems = () => {
    const db = getFirestore();
    const ref = doc(db, "items", id);
    getDoc(ref).then(
      res => {
        const data = {id: res.id ,...res.data()};
        setItem(data);
      })
  }

  return (
    <div className="mt-5">
      {loading ? <p>Loading...</p> : <ItemDetail item={item} />}
    </div>
  )
}
export default ItemDetailContainer