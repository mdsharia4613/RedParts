import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import './Cards.css'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useRef } from "react";

const Cards = () => {
    const [cards, setcards] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        fetch('/products.json')
        .then(res => res.json())
        .then(data => setcards(data))
    } ,[])

    // scroll function 

    const scroll = (direction) => {
        if(scrollRef.current){
            const {scrollLeft, clientWidth} = scrollRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
            scrollRef.current.scrollTo({
                left:scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    };
    return (
        <div className="container mx-auto px-10 mb-4">
            <div className="flex justify-between items-center ">
                <div>
                    <h2 className='font-bold text-2xl'>Featured Products</h2>
                </div>
                <div className=" flex items-center gap-5">
                    <NavLink  className="cards px-2 text-gray-400 hover:text-white hover:bg-stone-400 bg-[#e52727]">All</NavLink>
                    <NavLink  className="cards px-2 text-gray-400 hover:text-white hover:bg-stone-400" >Power Tools</NavLink>
                    <NavLink className="cards px-2 text-gray-400 hover:text-white hover:bg-stone-400">Handd Tools</NavLink>
                    <NavLink className="cards px-2 text-gray-400 hover:text-white hover:bg-stone-400">Plumbing</NavLink>
                    <button onClick={() => scroll('left')} className="cards  px-2 text-white bg-[#e52727] hover:bg-stone-500"><MdOutlineKeyboardArrowLeft />
                    </button> 
                    <button onClick={() => scroll('right')} className="cards  px-2 text-white bg-[#e52727] hover:bg-stone-500"> <MdKeyboardArrowRight />
                    </button>
                </div>
            </div>
            <div>
                <div ref={scrollRef}
                    className="flex overflow-x-auto space-x-5 mt-8 scrollbar-hide scroll-smooth"
                >
                    {
                        cards.map(card => <Card key={card.id} card={card}></Card>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Cards;