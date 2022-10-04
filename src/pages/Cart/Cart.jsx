import React, { useState, useEffect } from "react";
import EmptyCart from "./EmptyCart/EmptyCart";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

const Cart = () => {
	const [cart , setCart]=useState([])

   const getProduct = () => { 
      const cart = JSON.parse(localStorage.getItem('food'));
      if (cart) {
         setCart(Object.values(cart))
      } else {
         return;
      }
   }
   useEffect(getProduct,[cart])
	return (
		<>
			{cart.length === 0 ? <EmptyCart/> : <ShoppingCart/>}
		</>
	);
};

export default Cart;
