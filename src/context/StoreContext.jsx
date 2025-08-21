import { createContext, useEffect, useState } from "react";
import { food_list } from '../assets/assets';

export const storeContext =createContext(null)

const StoreContextProvider = (props) => {

    const [cartItem, setCartItem] = useState({});

    const addToCart = (itemId) => {
        setCartItem((prev) => {
            if (!prev[itemId]) {
                return { ...prev, [itemId]: 1 };
            } 
            else {
                return { ...prev, [itemId]: prev[itemId] + 1 };
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCartItem((prev) => {
            if (prev[itemId] > 1) {
                return { ...prev, [itemId]: prev[itemId] - 1 };
            } 
            else {
                const updatedCart = { ...prev };
                delete updatedCart[itemId];
                return updatedCart;
            }
        });
    };

    useEffect(() =>{
        console.log(cartItem)
    }, [cartItem])

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart
    }
    return(
        <storeContext.Provider  value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )

}

export default StoreContextProvider