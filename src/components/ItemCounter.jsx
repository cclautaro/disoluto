import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

function ItemCounter({ stock, initial, onAdd, onRemove }) {


    return (
        <div className='ml-10'>
            <p className="font-semibold text-xl">Cantidad:</p>
            <div className='flex flex-row my-5 gap-5'>
                <div className="basis-1/2 bg-slate-200 h-30 flex flex-row border border-gray-400 rounded-md">
                    <button className="basis-1/4 flex justify-center items-center text-sky-500" onClick={initial <= 0 ? null : onRemove}><MinusIcon className="block h-6 w-6" /></button>
                    <div className="basis-1/2 flex justify-center text-lg font-medium text-black">{initial}</div>
                    <button className="basis-1/4 justify-center items-center text-sky-500" onClick={initial >= stock ? null : onAdd}><PlusIcon className="block h-6 w-6" /></button>
                </div>
                <div className="basis-1/2">
                    <p className="font-semibold text-xl">({stock} disponibles)</p>

                </div>
            </div>

        </div>
    )
}
export default ItemCounter