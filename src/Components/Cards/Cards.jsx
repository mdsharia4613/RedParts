import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import './Cards.css';
import { useEffect, useState, useRef } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const scrollRef = useRef(null);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);

    // scroll function 
    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
            scrollRef.current.scrollTo({
                left: scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    };

    // Filtered Products
    const filteredCards = selectedCategory === "All"
        ? cards
        : cards.filter(card => card.category === selectedCategory);

    return (
        <div className="container mx-auto px-10 mb-4">
            <div className="flex justify-between items-center ">
                <div>
                    <h2 className='font-bold text-2xl'>Featured Products</h2>
                </div>

                <div className="flex items-center gap-5">
                    <button
                        onClick={() => setSelectedCategory("All")}
                        className={`cards px-2 ${selectedCategory === "All" ? "bg-[#e52727] text-white" : "text-gray-400 hover:text-white hover:bg-stone-400"}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setSelectedCategory("Power Tools")}
                        className={`cards px-2 ${selectedCategory === "Power Tools" ? "bg-[#e52727] text-white" : "text-gray-400 hover:text-white hover:bg-stone-400"}`}
                    >
                        Power Tools
                    </button>
                    <button
                        onClick={() => setSelectedCategory("Hand Tools")}
                        className={`cards px-2 ${selectedCategory === "Hand Tools" ? "bg-[#e52727] text-white" : "text-gray-400 hover:text-white hover:bg-stone-400"}`}
                    >
                        Hand Tools
                    </button>
                    <button
                        onClick={() => setSelectedCategory("Plumbing")}
                        className={`cards px-2 ${selectedCategory === "Plumbing" ? "bg-[#e52727] text-white" : "text-gray-400 hover:text-white hover:bg-stone-400"}`}
                    >
                        Plumbing
                    </button>

                    <button onClick={() => scroll('left')} className="cards px-2 text-white bg-[#e52727] hover:bg-stone-500"><MdOutlineKeyboardArrowLeft /></button>
                    <button onClick={() => scroll('right')} className="cards px-2 text-white bg-[#e52727] hover:bg-stone-500"><MdKeyboardArrowRight /></button>
                </div>
            </div>

            <div>
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto space-x-5 mt-8 scrollbar-hide scroll-smooth"
                >
                    {filteredCards.map(card => (
                        <Card key={card.id} card={card}></Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;
