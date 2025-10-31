import { useState } from "react";
import Herosection from "./components/Herosection";
import AboutSection from "./components/AboutSection";
import IconShowcasing from "./components/IconShowcasing";
import MarqueeSection from "./components/MarqueeSection";
import ExpandableCardSection from "./components/ExpandableCardSection";
import TestimonialsSection from "./components/TestimonialsSection";
import BannerSection from "./components/BannerSection";
import ContactSection from "./components/ContactSection";
import ContactModal from "./components/ui/ContactModal";

function Home() {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const openModal = () => setIsModelOpen(true);

  const closeModal = () => setIsModelOpen(false);
  return (
    <>
      <ContactModal isOpen={isModelOpen} onClose={closeModal} />
      <Herosection openModal={openModal} />
      <AboutSection />
      <IconShowcasing />
      <MarqueeSection />
      {/* <ScrollableCard /> */}
      <ExpandableCardSection />
      <TestimonialsSection />
      <BannerSection />
      <ContactSection />
    </>
  );
}

export default Home;
