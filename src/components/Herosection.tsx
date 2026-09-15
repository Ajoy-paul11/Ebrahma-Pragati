// // import bgImage from '../assets/Hero-bg.jpg';
// import { useEffect, useState } from "react";
// import LeadForm from "./LeadForm";

// function Herosection({ openModal }: { openModal: () => void }) {
//   const [openLeadForm, setOpenLeadForm] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setOpenLeadForm(true);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);
//   return (
//     <div
//       className=" mx-auto w-[95vw] rounded-4xl h-[90vh] flex flex-col justify-center items-center text-4xl font-bold"
//       style={{
//         backgroundImage: `url(https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/Hero-bg.jpg?updatedAt=1756461281919)`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className=" text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl drop-shadow-2xl">
//         <h1
//           className=" text-[#F7C35F] "
//           style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
//         >
//           Cultivating Tomorrow's
//         </h1>
//         <h1
//           className=" text-center "
//           style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
//         >
//           Sustainable Future
//         </h1>
//       </div>
//       {/* <div>
//         <h3 className=' text-sm md:text-lg lg:text-xl 2xl:text-2xl font-normal mt-5 text-white text-center w-[90%] md:w-[70%] lg:w-[60%] mx-auto'>
//         Discover regenerative farmland investments that nurture both soil and returns. Portfolio of premium land properties designed for those who seek to build their legacy on solid foundations.
//         </h3>
//       </div> */}
//       <button
//         onClick={openModal}
//         className=" mt-8 bg-[#F7C35F] text-[#034837] px-6 py-3 rounded-full text-lg font-semibold cursor-pointer transition duration-300"
//       >
//         Enquire Now
//       </button>

//       {openLeadForm && (
//         <div className=" absolute inset-0 flex justify-end items-center">
//           <LeadForm setOpenLeadForm={setOpenLeadForm} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Herosection;


import { useEffect, useState, useRef } from "react";
import LeadForm from "./LeadForm";

const slides = [
  {
    desktopImage:
      "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/Hero-bg.jpg?updatedAt=1756461281919",
    mobileImage:
      "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/Hero-bg.jpg?updatedAt=1756461281919",
    showContent: true,
    cover: true, // slide 1: fill height like original
  },
  {
    desktopImage:
      "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/second-desktop-banner.png?updatedAt=1780119502497",
    mobileImage:
      "https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/second-banner-mobile.png?updatedAt=1780119540008",
    showContent: false,
    cover: false, // slide 2: natural aspect ratio, no crop
  },
];

function Herosection({ openModal }: { openModal: () => void }) {
  const [openLeadForm, setOpenLeadForm] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState<number | null>(null);
  const [sliding, setSliding] = useState(false);
  const slidingRef = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpenLeadForm(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const goToSlide = (targetIndex: number) => {
    if (slidingRef.current || targetIndex === currentSlide) return;
    slidingRef.current = true;

    setNextSlide(targetIndex);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSliding(true);
        setTimeout(() => {
          setCurrentSlide(targetIndex);
          setNextSlide(null);
          setSliding(false);
          slidingRef.current = false;
        }, 600);
      });
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentSlide + 1) % slides.length;
      goToSlide(next);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const SlideContent = ({ index }: { index: number }) => {
    const slide = slides[index];
    return slide.cover ? (
      // Slide 1 — full height cover, same as original hero
      <div
        className="w-full h-[90vh] rounded-4xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${slide.desktopImage})`,
        }}
      />
    ) : (
      // Slide 2 — natural aspect ratio, no crop
      <>
        <img
          src={slide.desktopImage}
          alt="Banner"
          className="hidden md:block w-full h-auto object-contain rounded-4xl"
        />
        <img
          src={slide.mobileImage}
          alt="Banner"
          className="block md:hidden w-full h-auto object-contain rounded-4xl"
        />
      </>
    );
  };

  return (
    <div className="relative mx-auto w-[95vw] rounded-4xl overflow-hidden">
      {/* Slide track */}
      <div
        className="flex w-full"
        style={{
          transform: sliding ? "translateX(-100%)" : "translateX(0%)",
          transition: sliding ? "transform 600ms ease-in-out" : "none",
        }}
      >
        {/* Current slide */}
        <div className="w-full flex-shrink-0">
          <SlideContent index={currentSlide} />
        </div>

        {/* Next slide — mounted to the right */}
        {nextSlide !== null && (
          <div className="w-full flex-shrink-0">
            <SlideContent index={nextSlide} />
          </div>
        )}
      </div>

      {/* Overlay content — only slide 1, slides out with it */}
      <div
        className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none"
        style={{
          transform:
            sliding && slides[currentSlide].showContent
              ? "translateX(-100%)"
              : "translateX(0%)",
          transition:
            sliding && slides[currentSlide].showContent
              ? "transform 600ms ease-in-out"
              : "none",
          opacity: slides[currentSlide].showContent ? 1 : 0,
        }}
      >
        <div className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl drop-shadow-2xl">
          <h1
            className="text-[#F7C35F]"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            Cultivating Tomorrow's
          </h1>
          <h1
            className="text-center text-white"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
          >
            Sustainable Future
          </h1>
        </div>
        <button
          onClick={openModal}
          className="pointer-events-auto mt-8 bg-[#F7C35F] text-[#034837] px-6 py-3 rounded-full text-lg font-semibold cursor-pointer transition duration-300 hover:bg-yellow-400"
        >
          Enquire Now
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? "bg-[#F7C35F] scale-125"
                : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Lead form */}
      {openLeadForm && (
        <div className="absolute inset-0 flex justify-end items-center pointer-events-none z-20">
          <div className="pointer-events-auto">
            <LeadForm setOpenLeadForm={setOpenLeadForm} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Herosection;