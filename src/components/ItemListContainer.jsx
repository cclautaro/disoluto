import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore} from "firebase/firestore";
import ItemList from "./ItemList";



const ItemListContainer = () => {
  const [itemsList, setItemsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoryId} = useParams();
  

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");
      if(!categoryId){
        getDocs(itemCollection).then((snapshot) => {
          setItemsList(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
        });
      }
      else{
        getDocs(itemCollection).then((snapshot) => {
          let lista = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
          setItemsList(lista.filter( (i) => i.category === categoryId));
        });
      }
      setLoading(false);
  }, [categoryId]);

  return (
    <div>
      <div className="mt-5 flex">
      {loading ? <p>Loading...</p> : <ItemList items={itemsList} />}  
        
      </div>
    </div>
  )
}
export default ItemListContainer