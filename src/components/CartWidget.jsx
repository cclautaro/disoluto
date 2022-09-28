import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useCart } from './context/CartContext';

const CartWidget = () => {

  const [cantidadArt, setCantidadArt] = useState(0);
  const { productos } = useCart();

  useEffect(() => {
    if(productos.length){
      setCantidadArt(productos.length);
    }
    else{
      setCantidadArt(0);
    }
  }, [productos])
  

  return (
    <div>
      {
        cantidadArt
          ?
          <div className='flex flex-row gap-4 bg-lime-600 p-2 rounded-md text-slate-50'>
            <ShoppingCartIcon className="block h-6 w-6" />
            <p>{cantidadArt}</p>
          </div>
          :
          ""
      }
    </div>
  )
}
export default CartWidget