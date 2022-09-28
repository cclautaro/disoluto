import { useCart } from "./context/CartContext"

function Cart() {

  const { productos, removeItem } = useCart();

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
          </div>
        )}
      </div>
    </div>
  )
}
export default Cart