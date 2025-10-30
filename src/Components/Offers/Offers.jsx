import React from 'react';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import './Offers.css';


const Offers = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        
        <div className='offers-container'>

           
            <div className='blurred-bg'></div>

          
            <div className='swiper-content'>
                <Swiper
                    slidesPerView={4}
                    slidesPerGroup={4}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper bg-white bg-opacity-80 p-8 rounded-lg" // Tailwind ব্যবহার করে হালকা ব্যাকগ্রাউন্ড ও প্যাডিং দেওয়া হলো
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="flex flex-col items-center shadow-lg p-4 rounded-lg bg-white">
                                <img
                                    src={product.img}
                                    alt={product.productName}
                                    className="w-60 h-60 object-cover rounded-md"
                                />
                                <p className="mt-3 font-semibold text-gray-700">
                                    {product.productName}
                                </p>
                                <div>
                                    <p>{}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Offers;