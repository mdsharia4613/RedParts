import { createContext, useContext, useState } from "react";

// Context তৈরি করা
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    // ✅ Add to cart ফাংশন
    const addToCart = (product) => {
        setCartItems((prev) => [...prev, product]); // নতুন প্রডাক্ট যোগ
        setCartCount((prev) => prev + 1);
    };

    return (
        <CartContext.Provider value={{ cartItems, cartCount, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
