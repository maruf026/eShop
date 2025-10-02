import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function handleAddToCart(item) {
    // ✅ Check if item already in cart
    const alreadyInCart = cart.some((p) => p.id === item.id);

    if (alreadyInCart) {
      Swal.fire({
        title: "Already in Cart",
        text: `${item.name} is already added.`,
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else {
      
      setCart((prevCart) => {
  const existingItem = prevCart.find(p => p.id === item.id);

  if (existingItem) {
    // Item already in cart → increase quantity
    return prevCart.map(p =>
      p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
    );
  } else {
    // Item not in cart → add with quantity
    return [...prevCart, { ...item, quantity: 1 }];
  }
});


      Swal.fire({
        title: "Added to Cart!",
        text: `${item.name} has been added.`,
        icon: "success",
        confirmButtonText: "OK",
      });
    }
    
  }

  return (
    <CartContext.Provider value={{ cart, setCart ,handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// ✅ custom hook for easy use
export function useCart() {
  return useContext(CartContext);
}

export { CartProvider };
