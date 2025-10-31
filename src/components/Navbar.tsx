import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
// import logo from "../assets/logo-01.png";
import { Link } from "react-router";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string }[];
}

interface NavbarProps {
  openModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ openModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  //   Shadow effect while scroll down
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const navbar = document.getElementById("navbar");
  //     if (navbar) {
  //       if (window.scrollY > 0) {
  //         // navbar.classList.add("bg-white", "shadow-2xl", "rounded-[0px]");
  //         // navbar.classList.remove("bg-transparent");
  //       } else {
  //         // navbar.classList.remove("bg-white", "shadow-2xl", "rounded-[0px]");
  //         // navbar.classList.add("bg-transparent");
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  return (
    <>
      <nav id="navbar" className="my-2.5">
        <div className=" shadow-sm">
          <div className=" w-[95vw] mx-auto bg-white px-4 rounded-4xl md:rounded-full">
            <div className="flex justify-between items-center h-16 md:h-20">
              {/* Logo - Responsive sizing */}
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  {/* Logo container with responsive sizing */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex items-center justify-center">
                    <img
                      src="https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/logo-01.png?updatedAt=1755954622169"
                      alt="EbrahmaPragati Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Company name with responsive text */}
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#034837]">
                    <span className=" ">Ebrahma</span>Pragati
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navItems.map((item) => (
                    <div key={item.label} className="relative group">
                      <Link
                        to={item.href}
                        className="text-[#034837] hover:text-green-600 px-3 py-2 text-sm md:text-xl font-medium flex items-center transition-colors duration-200 border-b-2 border-transparent hover:border-[#034837] "
                        onMouseEnter={() =>
                          item.hasDropdown && setOpenDropdown(item.label)
                        }
                        onMouseLeave={() =>
                          item.hasDropdown && setOpenDropdown(null)
                        }
                      >
                        {item.label}
                        {item.hasDropdown && (
                          <ChevronDown className="ml-1 h-4 w-4" />
                        )}
                      </Link>

                      {/* Dropdown Menu */}
                      {item.hasDropdown &&
                        item.dropdownItems &&
                        openDropdown === item.label && (
                          <div
                            className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                            onMouseEnter={() => setOpenDropdown(item.label)}
                            onMouseLeave={() => setOpenDropdown(null)}
                          >
                            <div className="py-1">
                              {item.dropdownItems.map((dropItem) => (
                                <Link
                                  key={dropItem.label}
                                  to={dropItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                                >
                                  {dropItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  ))}
                  <div className="hidden md:block">
                    <button
                      onClick={openModal}
                      aria-label="Contact Us"
                      className=" bg-[#034837] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base font-medium hover:bg-[#034837]/80 transition-colors duration-200 cursor-pointer"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>

              {/* CTA Button */}

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-700 hover:text-green-600 p-2 rounded-md transition-colors duration-200"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden border-t border-gray-200">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-center">
                        <Link
                          to={item.href}
                          className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                        {item.hasDropdown && (
                          <button
                            onClick={() => toggleDropdown(item.label)}
                            className="p-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                          >
                            <ChevronDown
                              className={`h-4 w-4 transform transition-transform duration-200 ${
                                openDropdown === item.label ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Mobile Dropdown */}
                      {item.hasDropdown &&
                        item.dropdownItems &&
                        openDropdown === item.label && (
                          <div className="ml-4 space-y-1">
                            {item.dropdownItems.map((dropItem) => (
                              <Link
                                key={dropItem.label}
                                to="#"
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600 rounded-md transition-colors duration-200"
                              >
                                {dropItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}

                  {/* Mobile CTA Button */}
                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={() => {
                        toggleMobileMenu();
                        openModal();
                      }}
                      className="block w-full text-center bg-[#034837] hover:bg-green-800 text-white px-4 py-3 rounded-full cursor-pointer font-medium transition-colors duration-200"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
