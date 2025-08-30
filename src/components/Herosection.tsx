// import bgImage from '../assets/Hero-bg.jpg';
import { useEffect, useState } from "react";
import LeadForm from "./LeadForm";

function Herosection({ openModal }: { openModal: () => void }) {
  const [openLeadForm, setOpenLeadForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenLeadForm(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className=" mx-auto w-[95vw] rounded-4xl h-[90vh] flex flex-col justify-center items-center text-4xl font-bold"
      style={{
        backgroundImage: `url(https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/Hero-bg.jpg?updatedAt=1756461281919)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl drop-shadow-2xl">
        <h1
          className=" text-[#F7C35F] "
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          Cultivating Tomorrow's
        </h1>
        <h1
          className=" text-center "
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          Sustainable Future
        </h1>
      </div>
      {/* <div>
        <h3 className=' text-sm md:text-lg lg:text-xl 2xl:text-2xl font-normal mt-5 text-white text-center w-[90%] md:w-[70%] lg:w-[60%] mx-auto'>
        Discover regenerative farmland investments that nurture both soil and returns. Portfolio of premium land properties designed for those who seek to build their legacy on solid foundations.
        </h3>
      </div> */}
      <button
        onClick={openModal}
        className=" mt-8 bg-[#F7C35F] text-[#034837] px-6 py-3 rounded-full text-lg font-semibold cursor-pointer transition duration-300"
      >
        Enquire Now
      </button>
      <div className=" absolute inset-0 flex justify-end items-center">
        {openLeadForm && <LeadForm setOpenLeadForm={setOpenLeadForm} />}
      </div>
    </div>
  );
}

export default Herosection;
