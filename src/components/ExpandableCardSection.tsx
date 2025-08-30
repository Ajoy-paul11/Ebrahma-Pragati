import React, { useState } from "react";
// import { ArrowUpRight } from "lucide-react";

interface CardData {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  gradient: string;
}

const cardData: CardData[] = [
  {
    id: "kanakpura",
    title: "Kanakpura",
    description:
      "Kanakpura is known for its lush greenery, scenic waterfalls, and serene farmland. A perfect destination for those seeking both investment potential and natural beauty.",
    image:
      "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/project4.jpg?updatedAt=1756461282615",
    gradient: "from-green-900/60 to-transparent",
  },
  {
    id: "mandya",
    title: "Mandya",
    description:
      "Mandya, the sugarcane capital of Karnataka, is blessed with fertile soil and abundant water resources, making it one of the most productive farmlands in the state.",
    image:
      "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/project6.jpg?updatedAt=1756461282166",
    gradient: "from-green-800/50 to-transparent",
  },
  {
    id: "mysore",
    title: "Mysore",
    description:
      "Mysore combines royal heritage with modern growth, offering farmland that balances cultural charm with high investment potential in a rapidly developing region.",
    image:
      "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/project8.jpg?updatedAt=1756461282658",
    gradient: "from-orange-900/60 to-transparent",
  },
  {
    id: "harohalli",
    title: "Harohalli",
    description:
      "Harohalli is surrounded by scenic hills and greenery, making it an ideal location for peaceful living and long-term farmland investment opportunities.",
    image:
      "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/project2.jpg?updatedAt=1756461282487",
    gradient: "from-green-900/60 to-transparent",
  },
  {
    id: "kollegala",
    title: "Kollegala",
    description:
      "Kollegala, nestled near the Western Ghats, is known for its rich landscapes and fertile lands, offering a blend of tranquility and agricultural prosperity.",
    image:
      "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/project7.jpg?updatedAt=1756461282623",
    gradient: "from-blue-900/50 to-transparent",
  },
  {
    id: "sakleshpura",
    title: "Sakleshpura",
    description:
      "Sakleshpura, a hill station paradise, is famed for coffee estates, rolling hills, and misty mornings, making its farmlands highly desirable and serene.",
    image:
      "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/project1.jpg?updatedAt=1756461281970",
    gradient: "from-blue-900/50 to-transparent",
  },
  {
    id: "kushalnagara",
    title: "Kushalnagara",
    description:
      "Kushalnagara, located in the heart of Coorg, is surrounded by coffee plantations, rivers, and forests, offering farmland that blends nature with investment value.",
    image:
      "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/project3.jpg?updatedAt=1756461282555",
    gradient: "from-green-800/60 to-transparent",
  },
];


const ExpandableCardSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const activeCard = hoveredCard || cardData[0].id; // Default to first card

  const getCardWidth = (cardId: string): string => {
    if (activeCard === cardId) {
      return "flex-[2]"; // 2x width
    }
    return "flex-1"; // Normal width
  };

  return (
    <div className=" w-full h-[60vh] lg:h-screen my-18 lg:my-8">
      <div className="hidden lg:block w-full h-full p-8">
        <div className=" mx-auto h-full">
          <div className="flex gap-4 h-full">
            {cardData.map((card) => (
              <div
                key={card.id}
                className={`
                ${getCardWidth(card.id)}
                relative overflow-hidden rounded-3xl cursor-pointer
                transition-all duration-700 ease-in-out
                min-w-0 h-full
                group hidden lg:block
              `}
                onMouseEnter={() => setHoveredCard(card.id)}
                //   onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-b from-transparent from-70% to-black`}
                  />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  {/* Arrow Icon */}
                  {/* <div className="absolute top-8 right-8">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/30">
                      <ArrowUpRight size={20} className="text-white" />
                    </div>
                  </div> */}

                  {/* Title */}
                  <div className="mb-4">
                    <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                      {card.title}
                    </h2>
                    {card.subtitle && (
                      <h3 className="text-4xl md:text-5xl font-light tracking-wide -mt-2">
                        {card.subtitle}
                      </h3>
                    )}
                  </div>

                  {/* Description */}
                  <p
                    className={`
                    text-lg leading-relaxed transition-all duration-700
                    ${
                      activeCard === card.id
                        ? "opacity-100 max-h-32"
                        : "opacity-80 max-h-20 line-clamp-3"
                    }
                  `}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile Device Card Scroll */}
      <div className="block lg:hidden w-full h-full ">
        <div className="flex overflow-x-auto h-full snap-x snap-mandatory scrollbar-hide">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className="relative flex-shrink-0 h-full snap-center"
              style={{
                width:
                  index === cardData.length - 1
                    ? "100vw"
                    : "calc(100vw - 60px)",
                marginRight: index === cardData.length - 1 ? "0" : "0",
              }}
            >
              {/* Background Image */}
              <div className=" absolute inset-0 overflow-hidden rounded-3xl mx-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent`}
                />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 text-white">
                {/* Title */}
                <div className="mb-4">
                  <h2 className="text-2xl font-light tracking-wide">
                    {card.title}
                  </h2>
                  {card.subtitle && (
                    <h3 className="text-2xl md:text-3xl font-light tracking-wide -mt-1">
                      {card.subtitle}
                    </h3>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs opacity-90 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none; 
          }
        `}
      </style>
    </div>
  );
};

export default ExpandableCardSection;
