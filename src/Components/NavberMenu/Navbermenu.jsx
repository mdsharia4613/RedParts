import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { useCart } from "../CartContext/CartContext";
import { useState } from "react";


const Navbermenu = () => {
    const { cartCount, cartItems } = useCart();
    const [openCart, setOpenCart] = useState(false);
    return (
        <div className="navbar container mx-auto px-10 relative">
            {/* LEFT SIDE */}
            <div className="navbar-start hidden lg:flex items-center space-x-15 font-semibold text-lg">
                <NavLink to="catagory" className="hover:text-red-500 transition">Home</NavLink>
                <NavLink to="/" className="hover:text-red-500 transition">Catagory</NavLink>
                <NavLink to="/" className="hover:text-red-500 transition">blog</NavLink>
                <NavLink to="/" className="hover:text-red-500 transition">Shop</NavLink>
            </div>

            {/* CENTER LOGO */}
            <NavLink to="/" className="text-4xl font-bold">
                <span className="text-red-600">RED</span>PARTS
            </NavLink>

            {/* RIGHT ICONS */}
            <div className="navbar-end gap-6 relative">
                <NavLink className="text-3xl">
                    <CiHeart />
                </NavLink>

                <button className="flex items-center gap-2 cursor-pointer" type="button">
                    <span className="text-2xl">
                        <FaUserAlt />
                    </span>
                    <div>
                        <p className="text-gray-400 text-sm">Hello, Login</p>
                        <p className="font-semibold">My Account</p>
                    </div>
                </button>

                {/* 🛒 CART */}
                <div className="relative">
                    <button
                        className="flex items-center gap-2 cursor-pointer relative"
                        type="button"
                        onClick={() => setOpenCart(!openCart)}
                    >
                        <span className="text-2xl relative">
                            <FaShoppingCart />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </span>
                        <div>
                            <p className="text-gray-400 text-sm">Shopping Cart</p>
                            <p className="font-semibold">$ 0.00</p>
                        </div>
                    </button>

                    {/* 🟢 CART DROPDOWN */}
                    {openCart && (
                        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-3 z-50">
                            {cartItems.length > 0 ? (
                                cartItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 border-b py-2 last:border-none"
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.productName}
                                            className="w-12 h-12 rounded object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-semibold">{item.productName}</p>
                                            <p className="text-xs text-gray-600">${item.price}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500 text-sm">Cart is empty</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Navbermenu;
