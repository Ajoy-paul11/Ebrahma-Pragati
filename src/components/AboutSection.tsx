import VideoSection from "./ui/VideoSection";

function AboutSection() {
  return (
    <section className=" max-h-[95vh] w-full p-4 md:p-8 lg:p-12 xl:p-16 2xl:p-20 my-12 lg:my-0">
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-0 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
        <div className=" flex flex-col gap-8 lg:p-8 xl:p-12 2xl:p-16 xl:col-span-2">
          <h4 className=" text-lg lg:text-xl xl:text-2xl uppercase">
            our introduction
          </h4>
          <h3 className=" text-[1.1rem] lg:text-[1.4rem] 2xl:text-[1.8rem] text-[#fff] py-4">
            At{" "}
            <span className=" text-[#F7C35F] style-font text-[2rem] 2xl:text-[2.5rem]">
              {" "}
              Ebrahma Pragati
            </span>
            , We believe that finding the perfect property is about more than
            just square footage and location—it's about discovering a place
            where memories will be made and dreams can flourish.
          </h3>
          <h3 className=" text-3xl lg:text-4xl xl:text-5xl font-semibold py-2">
            Generous Plots and Farm Lands
          </h3>
          <h4 className=" text-2xl lg:text-3xl xl:text-4xl text-[#F7C35F] font-medium py-1">
            We're Leader in Farm-Land Market
          </h4>
          {/* <p className=" text-xl lg:text-2xl xl:text-3xl">
            Discover regenerative farmland investments that nurture both soil
            and returns. Portfolio of premium land properties designed for those
            who seek to build their legacy on solid foundations.
          </p> */}
        </div>
        <div className=" h-full">
          <VideoSection />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
