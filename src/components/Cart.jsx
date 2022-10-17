import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext"
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

function Cart() {

  const { productos, removeItem, clear } = useCart();
  const [total, setTotal] = useState(0)
  const [mensaje, setMensaje] = useState("No hay items para mostrar");

  const order = {
    buyer: { name: "comprador", phone: 12345, email: "comprador@coderhouse.com" },
    items: productos,
    total: total
  }

  useEffect(() => {
    setTotal(productos.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2));
  }, [productos])
  

  const orderHandler = () => {
    console.log(productos);
    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(res => {
      console.log(res);
      setMensaje("Tu compra finalizó con exito!")
      clear();
    })
  }

  if (!productos.length) {
    return (
      <div className="px-2 py-3">
        <p className="font-semibold text-xl tracking-tight mb-2">{mensaje}</p>
        <Link to={"/"}>
          <div>
            <button className="border-2 border-sky-500 rounded-md w-1/5 text-sky-500 text-lg font-regular hover:bg-sky-700 hover:text-white">Volver</button>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="divide-y-4 divide-gray-400 px-2">
        {productos.map(i =>
          <div>
            <p className="font-bold">{i.title}</p>
            <p>{i.description}</p>
            <p>Estas llevando {i.quantity}</p>
            <div className="py-3">
              <button
                onClick={() => { removeItem(i.id) }}
                className="border-2 border-sky-500 rounded-md w-1/4 text-sky-500 text-lg font-regular hover:bg-sky-700 hover:text-white py-2">
                Eliminar
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-10 px-2">
      <p>Precio total: {total}</p>
      <button
        className="border-2 border-green-500 rounded-md w-1/4 text-black text-lg font-regular hover:bg-green-700 hover:text-white px-2 py-2 mt-2"
        onClick={orderHandler}
      >
        Finaliza Compra
      </button>
      </div>
    </div>
  )
}
export default Cart