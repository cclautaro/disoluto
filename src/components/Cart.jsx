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
      <div>
        <p className="font-light text-base tracking-tight mb-2">{mensaje}</p>
        <Link to={"/"}>
          <div className="px-2 py-3">
            <button className="border-2 border-sky-500 rounded-md w-full text-sky-500 text-lg font-regular hover:bg-sky-700 hover:text-white">Volver</button>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div>
        {productos.map(i =>
          <div>
            <p>{i.title}</p>
            <p>{i.description}</p>
            <p>Estas llevando {i.quantity}</p>
            <div className="px-2 py-3">
              <button
                onClick={() => { removeItem(i.id) }}
                className="border-2 border-sky-500 rounded-md w-1/4 text-sky-500 text-lg font-regular hover:bg-sky-700 hover:text-white px-2 py-2">
                Eliminar
              </button>
            </div>
            <hr className="border-2" />
          </div>
        )}
        <p>precio total: {total}</p>
      </div>
      <button
        className="border-2 border-sky-500 rounded-md w-1/4 text-sky-500 text-lg font-regular hover:bg-sky-700 hover:text-white px-2 py-2"
        onClick={orderHandler}
      >
        Finaliza Compra
      </button>
    </div>
  )
}
export default Cart