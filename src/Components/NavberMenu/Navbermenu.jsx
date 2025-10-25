import { NavLink } from "react-router-dom";
import { CiHeart, } from "react-icons/ci";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";



const Navbermenu = () => {

    return (
        <div className="navbar   container mx-auto px-10">
            <div className="navbar-start ">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-xl">
                        <NavLink>Home</NavLink>
                        <li>
                            <details>
                                <summary>Shop</summary>
                                <ul className="p-2">
                                    <NavLink><a href="">Product</a></NavLink>
                                    <NavLink><a href="">Cart</a></NavLink>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Blog</summary>
                                <ul className="p-2">
                                    <NavLink><a href="">Blog List</a></NavLink>
                                    <NavLink><a href="">Post Page</a></NavLink>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Category</summary>
                                <ul className="p-2">
                                    <NavLink><a href="">Engine</a></NavLink>
                                    <NavLink><a href="">Motor</a></NavLink>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal items-center px-1 font-semibold text-lg">
                        <NavLink>Home</NavLink>
                        <li>
                            <details>
                                <summary>Shop</summary>
                                <ul className="p-2">
                                    <NavLink><a href="">Product</a></NavLink>
                                    <NavLink><a href="">Cart</a></NavLink>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Blog</summary>
                                <ul className="p-2">
                                    <NavLink><a href="">Blog List</a></NavLink>
                                    <NavLink><a href="">Post Page</a></NavLink>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Category</summary>
                                <ul className="p-2">
                                    <NavLink><a href="">Engine</a></NavLink>
                                    <NavLink><a href="">Motor</a></NavLink>
                                </ul>
                            </details>
                        </li>

                    </ul>
                </div>

            </div>
            <NavLink className="text-5xl font-bold"><span className="text-red-600">RED</span>PARTS</NavLink>
            <div className="navbar-end gap-6">
                <NavLink className="text-3xl "> <CiHeart /> </NavLink>
               <button className="flex items-center gap-2 cursor-pointer" type="button">
                    <span className="text-2xl"> < FaUserAlt /></span>
                    <div>
                        <p className="text-gray-500">Hello, Login</p>
                        <p className="font-semibold">My Account</p>
                    </div>
               </button>
                <button className="flex items-center gap-2 cursor-pointer" type="button">
                    <span className="text-2xl"> <FaShoppingCart /></span>
                    <div>
                        <p className="text-gray-400">Shopping Card</p>
                        <p className="font-semibold">$ 0: 00</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbermenu;