import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./PowerTools.css";

const PowerTools = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Power Tools</h2>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="flex flex-col items-center shadow-lg p-4 rounded-lg">
                            <img
                                src={product.img}
                                alt={product.productName}
                                className="w-60 h-60 object-cover rounded-md"
                            />
                            <p className="mt-3 font-semibold text-gray-700">
                                {product.productName}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PowerTools;
