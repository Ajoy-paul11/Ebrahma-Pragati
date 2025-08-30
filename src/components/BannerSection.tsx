// import bannerImage from "../assets/Banner.jpg";
// import bannerImg from "../assets/project2.jpg";
import { GrGrow } from "react-icons/gr";
import { GiCampingTent } from "react-icons/gi";

function BannerSection() {
  return (
    <section className=" w-[95vw] mx-auto my-12 flex flex-col lg:flex-row gap-8 rounded-4xl">
      <div className=" relative h-full w-full lg:w-1/2 rounded-4xl overflow-hidden my-auto">
        <img
          src="https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/project2.jpg?updatedAt=1756461282487"
          alt="banner-img"
          className=" aspect-square md:hidden"
        />
        <img src="https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/Banner.jpg?updatedAt=1756461460151" alt="banner-img" className=" hidden md:block object-cover" />
      </div>
      <div className=" w-full lg:w-1/2 flex flex-col gap-4 lg:gap-8 lg:p-8 xl:p-12 2xl:p-16">
        <h4 className=" text-base lg:text-xl 2xl:text-2xl uppercase text-center lg:text-start">
          modern farmlands
        </h4>
        <h3 className=" text-2xl lg:text-4xl 2xl:text-5xl font-semibold py-2 text-center lg:text-start">
          Where today’s investment becomes tomorrow’s reward.
        </h3>
        <h4 className=" text-center lg:text-start text-xl lg:text-3xl 2xl:text-4xl text-[#F7C35F] font-medium py-1">
          We are experts in co-farming.
        </h4>
        <div className=" flex flex-col gap-6 lg:gap-8">
          <div className=" flex items-center justify-center">
            <div className=" flex items-start gap-4 xl:gap-8">
              <div className=" my-auto p-4 lg:p-6 rounded-full bg-[#F7C35F] text-[#263C28]">
                <GrGrow className=" w-6 h-6 xl:w-10 xl:h-10" />
              </div>
              <div className=" flex flex-col gap-2 lg:gap-4">
                <h5 className=" text-sm md:text-lg lg:text-xl">Assured Growth</h5>
                <p className=" text-sm md:text-lg lg:text-xl">
                  Investing in farmland ensures long-term appreciation,
                  providing both security and strong returns as demand for
                  agricultural land continues to rise.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <div className=" flex items-start gap-4 xl:gap-8">
              <div className=" my-auto p-4 lg:p-6 rounded-full bg-[#F7C35F] text-[#263C28]">
                <GiCampingTent className=" w-6 h-6 xl:w-10 xl:h-10"/>
              </div>
              <div className=" flex flex-col gap-2 lg:gap-4">
                <h5 className=" text-sm md:text-lg lg:text-xl">Weekend Retreats</h5>
                <p className=" text-xs md:text-sm lg:text-lg">
                Transform your land into a personal getaway spot, perfect for family outings, eco-farming, or simply unwinding amidst fresh air and greenery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
