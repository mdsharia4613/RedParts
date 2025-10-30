import { FaStar } from "react-icons/fa";

const Card = ({ card }) => {
    const { productName, price, img, rating, brandName, category, inStock } = card;

    return (
        <div
            className="min-w-[250px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
        >
            {/* Product Image */}
            <div className="relative">
                <img
                    src={img}
                    alt={productName}
                    className="w-full h-56 object-cover rounded-t-2xl"
                />
                {!inStock && (
                    <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        Out of Stock
                    </span>
                )}
            </div>

            {/* Product Info */}
            <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-lg truncate">{productName}</h3>
                <p className="text-sm text-gray-500">{brandName} • {category}</p>

                <div className="flex items-center mt-2">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span className="text-gray-700 text-sm">{rating}</span>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <p className="text-xl font-bold text-[#e52727]">${price}</p>
                    <button
                        disabled={!inStock}
                        className={`px-3 py-1 text-sm rounded-lg transition-all duration-300 ${inStock
                                ? "bg-[#e52727] text-white hover:bg-stone-600"
                                : "bg-gray-400 text-gray-200 cursor-not-allowed"
                            }`}
                    >
                        {inStock ? "Add to Cart" : "Unavailable"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
