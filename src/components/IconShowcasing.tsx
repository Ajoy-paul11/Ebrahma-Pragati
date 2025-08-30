import {
  IconLocation,
  IconPlant2,
  IconMoneybagPlus,
  IconSeedling,
  IconFlower,
  IconGrowth,
} from "@tabler/icons-react";

function IconShowcasing() {
  return (
    <section className=" my-12 lg:my-0 w-[95vw] mx-auto rounded-4xl bg-[#6D8C54] px-2 md:px-4 xl:px-12 2xl:px-16 py-4 lg:py-12 2xl:py-26">
      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16 ">
        <div className=" flex flex-col items-center gap-2">
          <div className=" bg-[#F7C35F] p-4 rounded-full">
            <IconLocation className=" text-[#034837] w-6 h-6 lg:w-10 lg:h-10" />
          </div>
          <h4 className=" text-sm lg:text-lg xl:text-2xl">Prime Locations</h4>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <div className=" bg-[#F7C35F] p-4 rounded-full">
            <IconPlant2 className=" text-[#034837] w-6 h-6 lg:w-10 lg:h-10" />
          </div>
          <h4 className=" text-sm lg:text-lg xl:text-2xl">Expansive Plots</h4>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <div className=" bg-[#F7C35F] p-4 rounded-full">
            <IconMoneybagPlus className=" text-[#034837] w-6 h-6 lg:w-10 lg:h-10" />
          </div>
          <h4 className=" text-sm lg:text-lg xl:text-2xl">
            Premium Investment
          </h4>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <div className=" bg-[#F7C35F] p-4 rounded-full">
            <IconSeedling className=" text-[#034837] w-6 h-6 lg:w-10 lg:h-10" />
          </div>
          <h4 className=" text-sm lg:text-lg xl:text-2xl">
            Sustainable Development{" "}
          </h4>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <div className=" bg-[#F7C35F] p-4 rounded-full">
            <IconFlower className=" text-[#034837] w-6 h-6 lg:w-10 lg:h-10" />
          </div>
          <h4 className=" text-sm lg:text-lg xl:text-2xl ">
            Cultivated Elegance
          </h4>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <div className=" bg-[#F7C35F] p-4 rounded-full">
            <IconGrowth className=" text-[#034837] w-6 h-6 lg:w-10 lg:h-10" />
          </div>
          <h4 className=" text-sm lg:text-lg xl:text-2xl">
            100% Guaranteed
          </h4>
        </div>
      </div>
    </section>
  );
}

export default IconShowcasing;
