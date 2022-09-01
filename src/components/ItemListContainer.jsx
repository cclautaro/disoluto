import { useEffect, useState } from "react"
import ItemCounter from "./ItemCounter"
import ItemList from "./ItemList";

const dataItems =
  [
    {
      id: 1,
      title: "titulo 1",
      price: 2100,
      pictureURL: "url 1"
    },
    {
      id: 2,
      title: "titulo 2",
      price: 2200,
      pictureURL: "url 2"
    }, {
      id: 3,
      title: "titulo 3",
      price: 2300,
      pictureURL: "url 3"
    }
  ];

const ItemListContainer = ({ greeting }) => {
  const [counter, setCounter] = useState(0);
  const [itemsList, setItemsList] = useState([])
  const handleCounterAdd = () => { setCounter(counter + 1) };
  const handleCounterRemove = () => { setCounter(counter - 1) };

  useEffect(() => {
    setTimeout(() => {
      setItemsList(dataItems);
    }, 2000);
  }, []);

  return (
    <div>
      <div>{greeting}</div>
      <div className="my-5 bg-slate-200 max-w-xs h-30 flex flex-col mx-auto">
        <p className="m-2 text-lg font-regular text-black">Remera de Peppa Pig</p>
        <div className="flex flex-row gap-4 m-2 border rounded-md border-2 border-gray-400 bg-white">
          <ItemCounter stock={5} initial={counter} onAdd={handleCounterAdd} onRemove={handleCounterRemove} />
        </div>
        <div className="p-2 bg-white">
          <button className="border-2 border-sky-500 rounded-md w-full text-sky-500 py-2 text-lg font-regular">Agregar al carrito</button>
        </div>
      </div>
      <div className="mt-5">
        <ItemList items={itemsList} />
      </div>
    </div>
  )
}
export default ItemListContainer