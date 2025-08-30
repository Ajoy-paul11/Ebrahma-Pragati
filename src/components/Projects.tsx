


// import image3 from "../assets/Website_3-02.svg";
// import image4 from "../assets/Website_5-04.svg";
// import image5 from "../assets/Website_6-05.svg";
// import image7 from "../assets/Website_7-06.svg";
// import image6 from "../assets/Website_6-05.svg";
// import projectImg1 from "../assets/project1.jpg";
// import projectImg2 from "../assets/project2.jpg";
// import projectImg3 from "../assets/project3.jpg";
// import projectImg4 from "../assets/project4.jpg";
// import projectImg5 from "../assets/project5.jpg";
// import projectImg6 from "../assets/project6.jpg";
// import projectImg7 from "../assets/project7.jpg";
// import projectImg8 from "../assets/project8.jpg";


// import React, { useState, useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Card {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface ScrollableCardProps {
  cards?: Card[];
  visibleCards?: number;
}

const ScrollableCard: React.FC<ScrollableCardProps> = ({ 
  cards = defaultCards, 
  // visibleCards = 3 
}) => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const scrollContainerRef = useRef<HTMLDivElement>(null);

  // const scrollToIndex = (index: number) => {
  //   if (scrollContainerRef.current) {
  //     const cardWidth = scrollContainerRef.current.offsetWidth / visibleCards;
  //     const scrollPosition = index * cardWidth;
  //     scrollContainerRef.current.scrollTo({
  //       left: scrollPosition,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  // const handlePrevious = () => {
  //   const newIndex = currentIndex > 0 ? currentIndex - 1 : cards.length - visibleCards;
  //   setCurrentIndex(newIndex);
  //   scrollToIndex(newIndex);
  // };

  // const handleNext = () => {
  //   const newIndex = currentIndex < cards.length - visibleCards ? currentIndex + 1 : 0;
  //   setCurrentIndex(newIndex);
  //   scrollToIndex(newIndex);
  // };

  // const canScrollPrev = currentIndex > 0;
  // const canScrollNext = currentIndex < cards.length - visibleCards;

  return (
    <div className="relative w-[95vw] mx-auto p-4 hidden lg:block">
      <div className="relative">
        {/* Previous Button */}
        {/* <button
          onClick={handlePrevious}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 border border-gray-200 transition-all duration-200 ${
            canScrollPrev 
              ? 'hover:bg-gray-50 hover:shadow-xl text-gray-700' 
              : 'text-gray-300 cursor-not-allowed'
          }`}
          disabled={!canScrollPrev}
          aria-label="Previous cards"
        >
          <ChevronLeft size={24} />
        </button> */}

        {/* Cards Container */}
        <div className=" mb-16"
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            // style={{ 
            //   width: `${(cards.length / visibleCards) * 100}%`,
            //   transform: `translateX(-${(currentIndex / cards.length) * 100}%)`
            // }}
          >
            <div className=" grid grid-cols-6">
            {cards.map((card) => (
              <div 
                key={card.id}
                className=" px-2 "
                // style={{ width: `${100 / cards.length}%` }}
              >
                <div className=" rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[9/24] overflow-hidden">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                    />
                  </div>
                  {/* <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div> */}
                </div>
              </div>
            ))}
            </div>
            
          </div>
        </div>

        {/* Next Button */}
        {/* <button
          onClick={handleNext}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 border border-gray-200 transition-all duration-200 ${
            canScrollNext 
              ? 'hover:bg-gray-50 hover:shadow-xl text-gray-700' 
              : 'text-gray-300 cursor-not-allowed'
          }`}
          disabled={!canScrollNext}
          aria-label="Next cards"
        >
          <ChevronRight size={24} />
        </button> */}
      </div>

      {/* Pagination Dots */}
      {/* <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: cards.length - visibleCards + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              scrollToIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              currentIndex === index 
                ? 'bg-blue-500' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};

// Default cards data
const defaultCards: Card[] = [
  {
    id: 1,
    title: "Mountain Adventure",
    description: "Explore breathtaking mountain landscapes and discover hidden trails that lead to spectacular views.",
    imageUrl: "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/project1.jpg?updatedAt=1756461281970"
  },
  {
    id: 2,
    title: "Ocean Paradise",
    description: "Dive into crystal clear waters and experience the serenity of pristine beaches and tropical islands.",
    imageUrl: "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/project2.jpg?updatedAt=1756461282487"
  },
  {
    id: 3,
    title: "City Lights",
    description: "Experience the vibrant energy of urban life with stunning architecture and bustling city streets.",
    imageUrl: "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/project3.jpg?updatedAt=1756461282429"
  },
  {
    id: 4,
    title: "Forest Retreat",
    description: "Find peace in ancient forests where towering trees create a natural cathedral of tranquility.",
    imageUrl: "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/project4.jpg?updatedAt=1756461282615"
  },
  {
    id: 5,
    title: "Desert Sunset",
    description: "Witness the magical transformation of endless dunes under the golden glow of desert sunsets.",
    imageUrl: "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/project5.jpg?updatedAt=1756461282696"
  },
  {
    id: 6,
    title: "Lakeside Serenity",
    description: "Enjoy peaceful moments by pristine lakes surrounded by majestic mountains and wildlife.",
    imageUrl: "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/project8.jpg?updatedAt=1756461282658"
  }
];

export default ScrollableCard;