import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext"

function Cart() {

  const { productos, removeItem } = useCart();

  if(!productos.length){
    return(
      <div>
        <p className="font-light text-base tracking-tight mb-2">No hay items para mostrar</p>
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
            <hr className="border-2"/>
          </div>
        )}
        <p>precio total: {productos.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</p>
      </div>
    </div>
  )
}
export default Cart