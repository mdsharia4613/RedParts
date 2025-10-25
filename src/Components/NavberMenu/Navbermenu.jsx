import { NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

const Navbermenu = () => {
    return (
        <div className="navbar container mx-auto px-10 ">
            {/* LEFT SIDE */}
            <div className="navbar-start">
                <div className="hidden lg:flex items-center space-x-6 font-semibold text-lg">
                    <NavLink to="/" className="hover:text-red-500 transition">Home</NavLink>

                    {/* SHOP DROPDOWN */}
                    <div className="relative group">
                        <button className="hover:text-red-500 transition">Shop</button>
                        <div
                            className="absolute left-0 top-full hidden group-hover:flex flex-col bg-gray-800 rounded-md shadow-lg mt-2 w-40
              opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-50 overflow-hidden"
                        >
                            <NavLink to="/product" className="px-4 py-2 hover:bg-red-600 rounded-t-md text-white">Product</NavLink>
                            <NavLink to="/cart" className="px-4 py-2 hover:bg-red-600 rounded-b-md text-white">Cart</NavLink>
                        </div>
                    </div>

                    {/* BLOG DROPDOWN */}
                    <div className="relative group">
                        <button className="hover:text-red-500 transition">Blog</button>
                        <div
                            className="absolute left-0 top-full hidden group-hover:flex flex-col bg-gray-800 rounded-md shadow-lg mt-2 w-40
              opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-50 overflow-hidden"
                        >
                            <NavLink to="/blog-list" className="px-4 py-2 hover:bg-red-600 text-white">Blog List</NavLink>
                            <NavLink to="/post-page" className="px-4 py-2 hover:bg-red-600 text-white">Post Page</NavLink>
                        </div>
                    </div>

                    {/* CATEGORY DROPDOWN */}
                    <div className="relative group">
                        <button className="hover:text-red-500 transition">Category</button>
                        <div
                            className="absolute left-0 top-full hidden group-hover:flex flex-col bg-gray-800 rounded-md shadow-lg mt-2 w-40
              opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-50 overflow-hidden"
                        >
                            <NavLink to="/engine" className="px-4 py-2 hover:bg-red-600 text-white">Engine</NavLink>
                            <NavLink to="/motor" className="px-4 py-2 hover:bg-red-600 text-white">Motor</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* CENTER LOGO */}
            <NavLink to="/" className="text-4xl font-bold">
                <span className="text-red-600">RED</span>PARTS

            </NavLink>

            {/* RIGHT ICONS */}
            <div className="navbar-end gap-6">
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
                <button className="flex items-center gap-2 cursor-pointer" type="button">
                    <span className="text-2xl">
                        <FaShoppingCart />
                    </span>
                    <div>
                        <p className="text-gray-400 text-sm">Shopping Cart</p>
                        <p className="font-semibold">$ 0.00</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbermenu;
