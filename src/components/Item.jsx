import { Link } from "react-router-dom"

function Item({ item }) {
    return (
        <div className="my-5 bg-slate-200 h-30 flex flex-col mx-auto border border-gray-400 rounded-md w-[300px]">
            <p className="p-1 text-xl font-semibold text-black flex justify-center rounded-t-[0.290rem] bg-slate-300">{item.title}</p>
            <div className="py-2 flex justify-center">
                <img src={item.imageId} className="w-[224px] h-[224px] object-contain" />
            </div>
            <Link to={`/item/${item.id}`}>
                <div className="px-2 py-3">
                    <button className="border-2 border-sky-500 rounded-md w-full text-sky-500 text-lg font-regular hover:bg-sky-700 hover:text-white">Ver Detalle de producto</button>
                </div>
            </Link>
            <p className="p-1 text-lg font-medium text-black flex justify-center rounded-b-[0.290rem] bg-slate-300">Precio: ${item.price}</p>
        </div>
    )
}
export default Item

