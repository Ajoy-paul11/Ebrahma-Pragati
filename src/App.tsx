import "./App.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import ContactModal from "./components/ui/ContactModal";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Outlet } from "react-router";

function App() {
  const [loading, setLoading] = useState(true);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const openModal = () => setIsModelOpen(true);

  const closeModal = () => setIsModelOpen(false);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading ? (
          <div className=" h-screen flex justify-center items-center w-full bg-white">
            <video
              src="https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/New-Ebrahma/Logo-Compressed.mp4?updatedAt=1756462135911"
              autoPlay
              muted
              className="w-full h-full scale-200 lg:scale-100"
            ></video>
          </div>
        ) : (
          <>
            {/* {openLeadForm && <LeadForm setOpenLeadForm={setOpenLeadForm} />} */}
            <section className=" w-full h-full overflow-x-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              >
                <ContactModal isOpen={isModelOpen} onClose={closeModal} />
                <Navbar openModal={openModal} />
                <Outlet />
                <Footer />
              </motion.div>
            </section>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
