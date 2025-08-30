
function Footer() {
  return (
    <footer className=" w-full bg-gradient-to-r from-[#F7C35F] to-[#263C28]">
      <div
        className=" p-6 lg:p-20"
        style={{
          backgroundImage: `url(https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/footer-image.webp?updatedAt=1755955168752)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className=" absolute inset-0 bg-[#354e33]/70"></div> */}
        <div className="max-w-7xl mx-auto px-6 text-[#FFFAFA] relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo and Brand */}
            <div className="flex items-center gap-1 p-4 backdrop-blur-2xl rounded-2xl overflow-hidden">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-white ">
                <img src="https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/logo-01.png?updatedAt=1755954622169" className="" />
              </div>
              <div className=" ">
                <h4 className="font-bold text-xl">Ebrahma Pragati</h4>
                <p className="text-sm opacity-80">Premium Land & Properties</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap gap-6 text-sm">
              {/* <a href="#" className="hover:text-accent transition-colors">About</a>
              <a href="#" className="hover:text-accent transition-colors">Projects</a>
              <a href="#" className="hover:text-accent transition-colors">Invest</a>
              <a href="#" className="hover:text-accent transition-colors">Blog</a>
              <a href="#" className="hover:text-accent transition-colors">Contact</a> */}
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
            </nav>

            {/* Copyright */}
            <p className="text-sm">
              © {new Date().getFullYear()} Ebrahma Pragati. All rights reserved.
            </p>
          </div>
        </div>
      </div>  
    </footer>
  )
}

export default Footer