import { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, } from "../components/ui/avatar";
import { ChevronLeft, ChevronRight, } from "lucide-react";
// import bgImage from "../assets/testimonial-bg.webp";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ramesh Kumar",
      content:
        "Investing in Ebrahma Pragati Farm Land has been one of my best decisions. The plot I purchased has already appreciated in value, and I feel confident knowing my money is secured in a tangible asset.",
    },
    {
      id: 2,
      name: "Dr. Anjali Sharma",
      content:
        "Owning farmland was always a dream for me. With Ebrahma Pragati, the process was simple, transparent, and professional. I now have a peaceful weekend retreat that is also a smart long-term investment.",
    },
    {
      id: 3,
      name: "Vikram Patel",
      content:
        "What impressed me most was the clear documentation and hassle-free registration process. In a sector where trust is everything, Ebrahma Pragati truly stands out with their honesty and customer support.",
    },
    {
      id: 4,
      name: "Priya Menon",
      content:
        "I wanted to invest in something that is both valuable and future-proof. Buying a plot here gave me not just security, but also pride of ownership. The team even shared regular updates on the land development.",
    },
    {
      id: 5,
      name: "Arun Reddy",
      content:
        "Unlike other real estate investments, farmland offers peace of mind. With Ebrahma Pragati, I got a clear title, proper fencing, and easy access to the location. I’m already recommending them to my friends and family.",
    },
  ];
  

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className="py-10 bg-[#6D8C54] w-[95vw] mx-auto rounded-4xl max-h-fit"
      // style={{
      //   backgroundImage: `url(https://ik.imagekit.io/ajoy/Ebrahma%20Pragati/testimonial-bg.webp?updatedAt=1755955050028)`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   backgroundAttachment: "fixed",
      //   height: "100%",
      // }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className=" text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-6">
            What Our <span className="">Partners Say</span>
          </h2>
          <p className="text-base lg:text-xl max-w-3xl mx-auto">
            Don't just take our word for it. Hear from investors, farmers, and
            sustainability experts who are part of our growing community.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          <Card className=" shadow-soft border-border/50 overflow-hidden">
            <CardContent className="p-4 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Avatar and Info */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left min-w-[200px] text-[#FFFAFA]">
                  <Avatar className="w-24 h-24 mb-4 shadow-moss">
                    {/* <AvatarImage
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                    /> */}
                    <AvatarFallback className="bg-[#E1EBE2]/50 text-primary-foreground text-2xl rounded-full">
                      {currentTestimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {currentTestimonial.name}
                  </h3>

                  {/* <p className="text-primary font-medium mb-1">
                    {currentTestimonial.role}
                  </p>

                  <p className="text-muted-foreground text-sm mb-3">
                    {currentTestimonial.location}
                  </p> */}

                  {/* Rating */}
                  {/* <div className="flex gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    ))}
                  </div> */}
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed italic font-light text-[#FFFAFA]">
                    "{currentTestimonial.content}"
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              onClick={prevTestimonial}
              className="rounded-full p-3 bg-[#034837] hover:bg-[#034837]/80 text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              onClick={nextTestimonial}
              className="rounded-full p-3 bg-[#034837] hover:bg-[#034837]/80 text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          {/* <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div> */}
        </div>

        {/* Additional Testimonials Preview */}
        <div className=" md:grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 hidden">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                index === currentIndex ? "ring-1 ring-[#034837]" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar className="w-12 h-12 bg-[#034837] border-[#3f9d38]">
                    {/* <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    /> */}
                    <AvatarFallback className=" text-white rounded-full">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h4 className="font-semibold text-[#034837] text-lg">
                      {testimonial.name}
                    </h4>
                    {/* <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p> */}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-3">
                  {testimonial.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
