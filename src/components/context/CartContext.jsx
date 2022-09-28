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
            console.log("ki")
            const i = findProducto(id);
            if(item.quantity != i.quantity){
                i.quantity = item.quantity;
            }
        }
        else{
            console.log("we");
            setProductos(prevState => prevState.concat(item))
        }
    };

    const removeItem = (id) => {
        if(isInCart(id) && productos.length != 1){
            const index = productos.indexOf(findProducto(id))
            setProductos(prevState => prevState.filter((_, i) => i !== index));
        }
        else{
            clear();
        }
    };

    const clear = () => {
        setProductos([]);
    };

    const isInCart = (id) => {
        console.log(id);
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