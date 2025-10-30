import React, { useState } from 'react';
import { MapPin, ChevronLeft, ChevronRight, X } from 'lucide-react';
import mandya1 from "../../public/mandya/mandya1.jpg";
import mandya2 from "../../public/mandya/mandya2.jpg";
import mandya3 from "../../public/mandya/mandya3.jpg";
import mandya4 from "../../public/mandya/mandya4.jpg";
import mandya5 from "../../public/mandya/mandya5.jpg";

import kollegala1 from "../../public/kollegala/kollegala1.jpg";
import kollegala2 from "../../public/kollegala/kollegala2.jpg";
import kollegala3 from "../../public/kollegala/kollegala3.jpg";
import kollegala4 from "../../public/kollegala/kollegala4.jpg";
import kollegala5 from "../../public/kollegala/kollegala5.jpg";
import ContactModal from '../components/ui/ContactModal';


interface Location {
  id: number;
  title: string;
  subtitle: string;
  images: string[];
}

const ProjectsPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const locations: Location[] = [
    // {
    //   id: 1,
    //   title: "Kanakpura",
    //   subtitle: "Bangalore South - Serene Countryside",
    //   images: [
    //     mandya1,
    //     mandya2,
    //     mandya3,
    //     mandya4,
    //     mandya5
    //   ]
    // },
    {
      id: 2,
      title: "Mandya",
      subtitle: "Cauvery Basin - Rich Agricultural Land",
      images: [
        mandya1,
        mandya2,
        mandya3,
        mandya4,
        mandya5
      ]
    },
    // {
    //   id: 3,
    //   title: "Mysore",
    //   subtitle: "Heritage City - Premium Investment",
    //   images: [
    //     "mysore-1.jpg",
    //     "mysore-2.jpg",
    //     "mysore-3.jpg",
    //     "mysore-4.jpg",
    //     "mysore-5.jpg",
    //     "mysore-6.jpg"
    //   ]
    // },
    // {
    //   id: 4,
    //   title: "Harohalli",
    //   subtitle: "Kanakapura Road - Modern Farmland",
    //   images: [
    //     "harohalli-1.jpg",
    //     "harohalli-2.jpg",
    //     "harohalli-3.jpg",
    //     "harohalli-4.jpg"
    //   ]
    // },
    {
      id: 5,
      title: "Kollegala",
      subtitle: "Wildlife Corridor - Nature's Paradise",
      images: [
        kollegala1,
        kollegala2,
        kollegala3,
        kollegala4,
        kollegala5
      ]
    },
    // {
    //   id: 6,
    //   title: "Sakleshpura",
    //   subtitle: "Hill Station - Coffee Country",
    //   images: [
    //     "sakleshpura-1.jpg",
    //     "sakleshpura-2.jpg",
    //     "sakleshpura-3.jpg",
    //     "sakleshpura-4.jpg"
    //   ]
    // },
    // {
    //   id: 7,
    //   title: "Kushalnagara",
    //   subtitle: "Kodagu District - Riverside Retreat",
    //   images: [
    //     "kushalnagara-1.jpg",
    //     "kushalnagara-2.jpg",
    //     "kushalnagara-3.jpg",
    //     "kushalnagara-4.jpg",
    //     "kushalnagara-5.jpg"
    //   ]
    // }
  ];

  const openGallery = (locationId: number, imageIndex: number) => {
    setSelectedLocation(locationId);
    setCurrentImageIndex(imageIndex);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedLocation(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedLocation !== null) {
      const location = locations.find(loc => loc.id === selectedLocation);
      if (location) {
        setCurrentImageIndex((prev) => (prev + 1) % location.images.length);
      }
    }
  };

  const prevImage = () => {
    if (selectedLocation !== null) {
      const location = locations.find(loc => loc.id === selectedLocation);
      if (location) {
        setCurrentImageIndex((prev) => (prev - 1 + location.images.length) % location.images.length);
      }
    }
  };

  const currentLocation = selectedLocation !== null ? locations.find(loc => loc.id === selectedLocation) : null;

  const [isModelOpen, setIsModelOpen] = useState(false);
  
    const openModal = () => setIsModelOpen(true);
  
    const closeModal = () => setIsModelOpen(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ContactModal isOpen={isModelOpen} onClose={closeModal} />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-[#263c28] to-[#1a2b1c] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptLTEyIDBjMy4zMSAwIDYtMi42OSA2LTZzLTIuNjktNi02LTYtNiAyLjY5LTYgNiAyLjY5IDYgNiA2ek0zNiAyNmMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6bS0xMiAwYzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
          <div>
            <div className="inline-block mb-4">
              <span className="bg-[#F7C35F] text-[#263c28] px-4 py-2 rounded-full text-sm font-semibold">
                Project Gallery
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Explore Our<br />
              <span className="text-[#F7C35F]">Beautiful Locations</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Take a visual journey through our stunning farmland properties across Karnataka
            </p>
          </div>
        </div>
      </section>

      {/* Locations Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {locations.map((location, locationIndex) => (
            <div key={location.id} className="space-y-8">
              {/* Location Header */}
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2 text-[#F7C35F]">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Location {locationIndex + 1} of {locations.length}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#263c28]">
                  {location.title}
                </h2>
                <p className="text-xl text-gray-600">{location.subtitle}</p>
                <div className="w-20 h-1 bg-[#F7C35F] mx-auto mt-4"></div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {location.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    onClick={() => openGallery(location.id, imageIndex)}
                    className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                      imageIndex === 0 ? 'col-span-2 row-span-2' : ''
                    }`}
                    style={{ minHeight: imageIndex === 0 ? '400px' : '200px' }}
                  >
                    {/* Placeholder Background */}
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-[#263c28] to-[#3d5a3f] flex items-center justify-center">
                      <div className="text-center text-white opacity-50">
                        <div className="text-sm font-semibold mb-1">{location.title}</div>
                        <div className="text-xs">Image {imageIndex + 1}</div>
                        <div className="text-xs mt-2 px-3 py-1 bg-white/20 rounded inline-block">
                          {image}
                        </div>
                      </div>
                    </div> */}
                    
                    {/* Uncomment when you have images */}
                    <img 
                      src={`${image}`}
                      alt={`${location.title} - View ${imageIndex + 1}`}
                      className="w-full h-full object-cover"
                    /> 

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-[#F7C35F] text-[#263c28] px-6 py-3 rounded-lg font-semibold">
                          View Fullscreen
                        </div>
                      </div>
                    </div>

                    {/* Image Counter Badge */}
                    {imageIndex === 0 && (
                      <div className="absolute top-4 right-4 bg-[#F7C35F] text-[#263c28] px-3 py-1 rounded-full text-sm font-semibold">
                        {location.images.length} Photos
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <div className="text-center">
                <button
                  onClick={() => openGallery(location.id, 0)}
                  className="bg-[#263c28] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a2b1c] transition-colors inline-flex items-center gap-2"
                >
                  View All {location.images.length} Photos
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Divider */}
              {locationIndex < locations.length - 1 && (
                <div className="pt-12">
                  <div className="border-t border-gray-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Gallery Modal */}
      {isGalleryOpen && currentLocation && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 z-10 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold">
            {currentImageIndex + 1} / {currentLocation.images.length}
          </div>

          {/* Location Info */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-white/10 text-white px-6 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
            {currentLocation.title}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 z-10 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image */}
          <div className="max-w-7xl max-h-[90vh] mx-4">
            <div className="bg-gradient-to-br from-[#263c28] to-[#3d5a3f] rounded-lg overflow-hidden">
              {/* <div className="flex items-center justify-center p-8 min-h-[70vh]">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold mb-2">{currentLocation.title}</div>
                  <div className="text-lg mb-4">{currentLocation.subtitle}</div>
                  <div className="text-sm opacity-75 mb-4">
                    Image {currentImageIndex + 1} of {currentLocation.images.length}
                  </div>
                  <div className="px-4 py-2 bg-white/20 rounded inline-block text-sm">
                    {currentLocation.images[currentImageIndex]}
                  </div>
                  <div className="mt-6 text-xs opacity-60">
                    Replace placeholder with your actual images
                  </div>
                </div>
              </div> */}
              {/* Uncomment when you have images */}
               <img
                src={`${currentLocation.images[currentImageIndex]}`}
                alt={`${currentLocation.title} - View ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              /> 
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 max-w-4xl overflow-x-auto">
            <div className="flex gap-2 px-4">
              {currentLocation.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? 'border-[#F7C35F] scale-110'
                      : 'border-white/30 opacity-60 hover:opacity-100'
                  }`}
                >
                  {/* <div className="w-full h-full bg-gradient-to-br from-[#263c28] to-[#3d5a3f] flex items-center justify-center">
                    <span className="text-white text-xs">{index + 1}</span>
                  </div> */}
                  {/* Uncomment when you have images */}
                   <img
                    src={`${image}`}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  /> 
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#263c28] to-[#1a2b1c] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Fall in Love with a Location?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a site visit to experience the beauty and potential of these properties firsthand.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={openModal} 
              className="bg-[#F7C35F] text-[#263c28] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e5b350] transition-colors shadow-lg hover:shadow-xl"
            >
              Schedule Visit
            </button>
            <a 
              href="tel:+919900099963" 
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors shadow-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;