import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const[cart,setCart]=useState([])

    const addToCart=(product,id)=>{
      // console.log(product)
      // console.log(`Item ${product.title } Added to the Cart`)
      const newItem={...product, amount:1 }
      console.log(newItem)
    }
  return <CartContext.Provider value={{addToCart}} > {children} </CartContext.Provider>;
};

export default CartProvider;
