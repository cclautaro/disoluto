import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ItemCounter from "../ItemCounter";


const ItemDetail = ({ item }) => {

  const { addItem } = useCart();

  const [counter, setCounter] = useState(1);
  const handleCounterAdd = () => { setCounter(counter + 1) };
  const handleCounterRemove = () => { setCounter(counter - 1) };

  const addHandler = (item, quantity) => {
    item.quantity = quantity;
    addItem(item);
  }


  return (
    <div className="flex flex-row gap-10">
      <div className="basis-1/3">
        <img src={item.imageId} className="w-[640px] h-[640px]" />
      </div>
      <div className="basis-1/3">
        <p className="font-light text-base tracking-tight mb-2">{item.category}</p>
        <h1 className="font-semibold text-4xl">{item.title}</h1>
        <p className="font-light text-6xl tracking-tight mt-6">${item.price}</p>
        <p className="my-6 font-normal text-xl"><b>Lo que tenes que saber sobre este producto:</b><br/>{item.desc}</p>
      </div>
      <div className="basis-1/3 mt-40">
        <ItemCounter stock={item.stock} initial={counter} onAdd={handleCounterAdd} onRemove={handleCounterRemove} />
        <Link to={`/cart`}>
          <div className="ml-10">
          <button onClick={() => { addHandler(item, counter) }} className="border-2 border-sky-500 rounded-md w-1/2 text-sky-500 text-lg font-regular hover:bg-sky-700 hover:text-white px-2 py-2">Comprar</button>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default ItemDetail

// Queda pendiente darle un mejor formato a esta seccion y a todo en general.
// Tambien separar en carpetas.