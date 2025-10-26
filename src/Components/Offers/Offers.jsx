import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';


const Offers = () => {

    const [offers, setOffers] = useState([]);

    useEffect(() => {
        fetch('/card.json')
        .then(res => res.json())
        .then(data => setOffers(data))
    } ,[])
    return (
        <div className='container mx-auto'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    offers.map((offer) => (
                        <SwiperSlide>
                            <div>
                                <img className="w-60 h-60 object-cover rounded-md" src={offer.img} alt="" />
                                <p>{offer.productName}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Offers;