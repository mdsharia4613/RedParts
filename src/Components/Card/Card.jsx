import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";



// import required modulesimport { Pagination } from 'swiper/modules';
const Card = ({card}) => {

    const { img, brand, productName,  reviewCount, price } = card;
    return (
        <Link >
            <div className='w-64 shadow-2xl p-8 space-y-2 mb-10 mt-10'>
                <img className='w-64' src={img} alt="" />
                <p className='text-gray-400'>{brand}</p>
                <h2 className='text-gray-800 font-semibold'>{productName}</h2>
                <div className='flex gap-10'>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />

                    </div>
                    <p>{reviewCount}</p>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <p className="text-xl font-semibold">$:{price}</p>
                    <NavLink className="text-xl text-gray-500"> <MdOutlineShoppingCart /></NavLink>
                </div>

            </div>

        </Link>

    );
};

export default Card;