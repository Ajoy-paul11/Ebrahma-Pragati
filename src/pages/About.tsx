import React, { useState } from 'react';
import { Leaf, Target, Users, Award, Shield, TrendingUp } from 'lucide-react';
// import aboutBg from "../../public/ebrahma-about-bg.svg";
import ContactModal from '../components/ui/ContactModal';


const AboutPage: React.FC = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const openModal = () => setIsModelOpen(true);

  const closeModal = () => setIsModelOpen(false);
  return (
    <div className="bg-white text-gray-900">
      <ContactModal isOpen={isModelOpen} onClose={closeModal} />
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-[#263c28] to-[#1a2b1c] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnptLTEyIDBjMy4zMSAwIDYtMi42OSA2LTZzLTIuNjktNi02LTYtNiAyLjY5LTYgNiAyLjY5IDYgNiA2ek0zNiAyNmMzLjMxIDAgNi0yLjY5IDYtNnMtMi42OS02LTYtNi02IDIuNjktNiA2IDIuNjkgNiA2IDZ6bS0xMiAwYzMuMzEgMCA2LTIuNjkgNi02cy0yLjY5LTYtNi02LTYgMi42OS02IDYgMi42OSA2IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
          {/* <div className={`absolute inset-0 bg-[url(${aboutBg})]`}></div> */}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl capitalize">
            <div className="inline-block mb-4">
              <span className="bg-[#F7C35F] text-[#263c28] px-4 py-2 rounded-full text-sm font-semibold">
                About Ebrahma Pragati
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Cultivating Legacy,<br />
              <span className="text-[#F7C35F]">Growing Together</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We believe in the power of land, legacy and responsible growth. Every plot is a promise for a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#263c28]">Our Story</h2>
              <div className="w-20 h-1 bg-[#F7C35F]"></div>
              <p className="text-gray-700 leading-relaxed">
                Established with a deep respect for the earth and for future generations, Ebrahma Pragati was founded to transform farmland into more than just plots of land — we wanted to create living, breathing ecosystems where families, nature and enterprise grow together.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Nestled in the heart of India, our farmlands are carefully selected for their fertility, accessibility and natural beauty. We are committed to maintaining a sustainable footprint, preserving green open spaces, and building a community around each plot that honours the land and cherishes serenity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We understand that purchasing farmland is not just a transaction — it's a commitment to legacy, to your family's future, and to the environment.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#263c28] to-[#3d5a3f] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop" 
                  alt="Farmland landscape" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#F7C35F] text-[#263c28] p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm font-semibold">Years of Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#F7C35F] hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#263c28] rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#F7C35F]" />
                </div>
                <h2 className="text-3xl font-bold text-[#263c28]">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                To be India's most trusted farmland partner — where sustainable land-use, community enrichment and value creation come together. We envision a future where each plot is not simply owned, but nurtured.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We aim to create green corridors of farmland across regions, each one designed with the environment in mind, each one a living asset. We believe the land you pick today should reward you tomorrow — emotionally, financially and socially.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[#263c28] rounded-2xl p-8 shadow-lg border-t-4 border-[#F7C35F] hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#F7C35F] rounded-lg flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-[#263c28]" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <div className="space-y-4 text-gray-200">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-[#F7C35F] rounded-full mt-2 flex-shrink-0"></div>
                  <p><span className="font-semibold text-[#F7C35F]">Transparency & Trust:</span> Full clarity in land titles, project progress and customer communication.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-[#F7C35F] rounded-full mt-2 flex-shrink-0"></div>
                  <p><span className="font-semibold text-[#F7C35F]">Sustainable Practices:</span> Green landscaping and minimal ecological disruption.</p>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-[#F7C35F] rounded-full mt-2 flex-shrink-0"></div>
                  <p><span className="font-semibold text-[#F7C35F]">Community First:</span> Building connections, amenities and safety for everyone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#263c28] mb-4">Why Choose Us?</h2>
            <div className="w-20 h-1 bg-[#F7C35F] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-b-4 border-[#F7C35F]">
              <div className="w-14 h-14 bg-[#263c28] rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#F7C35F]" />
              </div>
              <h3 className="text-xl font-bold text-[#263c28] mb-3">Transparent Legal Process</h3>
              <p className="text-gray-700">Clear documentation and legal support from intent to ownership with complete confidence.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-b-4 border-[#F7C35F]">
              <div className="w-14 h-14 bg-[#263c28] rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-[#F7C35F]" />
              </div>
              <h3 className="text-xl font-bold text-[#263c28] mb-3">Prime Locations</h3>
              <p className="text-gray-700">Strategically selected for accessibility, amenities and long-term growth potential.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-b-4 border-[#F7C35F]">
              <div className="w-14 h-14 bg-[#263c28] rounded-lg flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7 text-[#F7C35F]" />
              </div>
              <h3 className="text-xl font-bold text-[#263c28] mb-3">Eco-Friendly Infrastructure</h3>
              <p className="text-gray-700">Green planning that adds lifestyle value while respecting nature and sustainability.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-b-4 border-[#F7C35F]">
              <div className="w-14 h-14 bg-[#263c28] rounded-lg flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-[#F7C35F]" />
              </div>
              <h3 className="text-xl font-bold text-[#263c28] mb-3">Proven Track Record</h3>
              <p className="text-gray-700">Backed by experienced land developers with a history of successful projects.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-b-4 border-[#F7C35F]">
              <div className="w-14 h-14 bg-[#263c28] rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#F7C35F]" />
              </div>
              <h3 className="text-xl font-bold text-[#263c28] mb-3">Community Building</h3>
              <p className="text-gray-700">Creating connected communities where neighbors become family and plots become homes.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-b-4 border-[#F7C35F]">
              <div className="w-14 h-14 bg-[#263c28] rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#F7C35F]" />
              </div>
              <h3 className="text-xl font-bold text-[#263c28] mb-3">Lifetime Support</h3>
              <p className="text-gray-700">Ongoing support for queries, maintenance and community development beyond the sale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section with Background */}
      <section className="py-20 bg-gradient-to-br from-[#263c28] to-[#1a2b1c] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Promise to You</h2>
          <div className="w-20 h-1 bg-[#F7C35F] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            We promise to honour the trust you place in us. We commit to delivering what we say, creating sustainable value and ensuring that your decision today becomes a source of pride tomorrow.
          </p>
          <p className="text-lg text-gray-300">
            Whether you are buying for legacy, leisure or investment — we are here with you, every step of the way.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#263c28] mb-6">
            Ready to Explore Your Future Farmland?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's begin a rewarding journey together. Connect with us today and discover the perfect plot for your dreams.
          </p>
          <button 
            onClick={openModal} 
            className="inline-block bg-[#F7C35F] text-[#263c28] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e5b350] cursor-pointer transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;