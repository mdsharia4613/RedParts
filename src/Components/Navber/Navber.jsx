import './Navber.css'
import { NavLink } from 'react-router-dom';



const Navber = () => {

    return (
      
        <div className="relative w-full flex justify-center text-sm text-white">
            {/* Left red background */}
            <div className="absolute left-0 top-0 h-full w-1/2 bg-red-600 clip-left"></div>

            {/* Right dark background */}
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gray-800 clip-right"></div>

            {/* Main content */}
            <div className="relative flex flex-wrap justify-between items-center w-[90%] lg:w-[80%] h-10">
                {/* Left side */}
                <div className="flex items-center space-x-4">
                    <span className="font-semibold">
                        Call Us: <span className="font-bold">(800) 060-0730</span>
                    </span >
                        <NavLink className='text-gray-300 hover:text-white'  to='/about'>About Us</NavLink>
                        <NavLink className='text-gray-300 hover:text-white' to='/contact'>Contact</NavLink>
                        <NavLink className='text-gray-300 hover:text-white' to='/track-order'>Track Order</NavLink>
                </div>

                {/* Middle text */}
                <div >
                    <NavLink  className="hidden md:block text-gray-600 bg-white px-10 py-3 text-xs font-semibold uppercase box">Auto Parts for Cars, Trucks and Motorcycles</NavLink>

                </div>

                {/* Right side */}
                <div className="flex items-center space-x-4">
                    <span>Compare: <strong>0</strong></span>
                    <span className='text-gray-300 hover:text-white'>
                        Currency:{" "}
                        <select className="bg-gray-800 border-none focus:outline-none">
                            <option>USD</option>
                            <option>EUR</option>
                        </select>
                    </span>
                    <span className='text-gray-300 hover:text-white'>
                        Language:{" "}
                        <select className="bg-gray-800 border-none focus:outline-none">
                            <option>EN</option>
                            <option>BN</option>
                        </select>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Navber;