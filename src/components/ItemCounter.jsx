import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

function ItemCounter({stock, initial, onAdd, onRemove}) {


    return (
        <>
            <button className="basis-1/4 flex justify-center items-center text-sky-500" onClick={initial <= 0? null : onRemove}><MinusIcon className="block h-6 w-6" /></button>
            <div className="basis-1/2 flex justify-center text-lg font-medium text-black">{initial}</div>
            <button className="basis-1/4 justify-center items-center text-sky-500" onClick={initial >= stock? null : onAdd}><PlusIcon className="block h-6 w-6" /></button>
        </>
    )
}
export default ItemCounter