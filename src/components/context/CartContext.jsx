import React from "react"
import { useContext, useState } from "react";

const useCart = () => {
    return useContext(CartContext)
}

const CartContext = React.createContext([]);

const CartProvider = ({ defaultValue = [], children }) => {

    const [productos, setProductos] = useState(defaultValue);


    const addItem = (item) => {
        const id = item.id;
        if(isInCart(id)){
            const i = findProducto(id);
            if(item.quantity != i.quantity){
                i.quantity = item.quantity;
            }
        }
        else{
            setProductos(prevState => prevState.concat(item))
        }
        console.log(productos);
    };

    const removeItem = (id) => {
        if(isInCart(id)){
            const index = productos.indexOf(findProducto(id))
            productos.splice(index,1);
        }
    };

    const clear = () => {
        setProductos([]);
    };

    const isInCart = (id) => {
       return productos.some((i) => i.id === id);
    };

    const findProducto = (id) => {
        return productos.find( (i) => i.id == id );
     };

    const context = {
        productos,
        addItem,
        removeItem,
        clear,
        isInCart
    }


    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export { useCart, CartProvider }