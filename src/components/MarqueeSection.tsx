import Marquee from "react-fast-marquee"

function MarqueeSection() {
  return (
    <section className=' w-[95vw] mx-auto my-6 2xl:my-12'>
        <h2 className=" mt-[70px] text-center text-white style-font text-3xl lg:text-4xl font-bold mb-6">
        Our Running Projects
      </h2>
      <section className=" p-2 bg-[#E1EBE2] rounded-full">
        <div className=" overflow-hidden text-[#354e33] good-font">
          <Marquee className="no-scrollbar" speed={100}>
            <span className=" mx-10 uppercase text-4xl">Kanakpura</span>
            <span className=" mx-10 uppercase text-4xl">Mandya</span>
            <span className=" mx-10 uppercase text-4xl">Mysore</span>
            <span className=" mx-10 uppercase text-4xl">Harohalli</span>
            <span className=" mx-10 uppercase text-4xl">Kollegala</span>
            <span className=" mx-10 uppercase text-4xl">Sakleshpura</span>
            <span className=" mx-10 uppercase text-4xl">Kushalnagara</span>
          </Marquee>
        </div>
      </section>
      <section className=" mb-[70px] p-2 bg-[#354e33] rounded-full">
        <div className=" overflow-hidden text-[#fff] good-font">
          <Marquee className="no-scrollbar" direction="right" speed={100}>
            <span className=" mx-10 uppercase text-4xl">Kanakpura</span>
            <span className=" mx-10 uppercase text-4xl">Mandya</span>
            <span className=" mx-10 uppercase text-4xl">Mysore</span>
            <span className=" mx-10 uppercase text-4xl">Harohalli</span>
            <span className=" mx-10 uppercase text-4xl">Kollegala</span>
            <span className=" mx-10 uppercase text-4xl">Sakleshpura</span>
            <span className=" mx-10 uppercase text-4xl">Kushalnagara</span>
          </Marquee>
        </div>
      </section>
    </section>
  )
}

export default MarqueeSection