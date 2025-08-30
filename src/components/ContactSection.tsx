import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { Send } from "lucide-react";

interface FormData {
  access_key: string;
  subject: string;
  from_name: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

function ContactSection() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsSubmitting(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!", {
          duration: 5000,
          position: "top-center",
        });

        reset();
      } else {
        toast.error("Something went wrong. Please try again later.", {
          duration: 5000,
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        duration: 5000,
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className=" w-[95vw] mx-auto flex justify-center py-10 items-center overflow-hidden">
      <div className=" flex flex-col md:flex-row gap-8 lg:gap-0 w-full">
      <div className=" h-full md:w-1/2 overflow-hidden">
        <div>
          <div className=" flex flex-col gap-6 lg:gap-8 lg:p-8 xl:p-12 2xl:p-16 col-span-2">
            <h4 className=" text-base lg:text-lg xl:text-xl uppercase text-center lg:text-start">
              contact now
            </h4>
            <h3 className=" text-2xl lg:text-4xl xl:text-5xl py-2 lg:py-4 uppercase font-semibold text-center lg:text-start">
              get in touch now
            </h3>
            <h3 className=" text-xs lg:text-base xl:text-lg text-center lg:text-start">
              Any question? Just Write us a Message!
            </h3>
            <div className=" pl-16 lg:pl-0">
              <p className=" uppercase text-xs lg:text-sm">phone</p>
              <h4 className=" text-sm lg:text-lg">9845041912</h4>
              <h4 className=" text-sm lg:text-lg">9900099963</h4>
            </div>
            <div className=" pl-16 lg:pl-0">
              <p className=" uppercase text-xs lg:text-sm">email</p>
              <h4 className=" text-sm lg:text-lg">
                connect@ebrahmapragati.com
              </h4>
            </div>
            <div className=" pl-16 lg:pl-0">
              <p className=" uppercase text-xs lg:text-sm">address</p>
              <h4 className=" text-sm lg:text-lg w-[90%] lg:w-2/3">
                Sourabha Complex, No.293, 2nd Floor, 12th Cross, 17th Main Rd,
                Opp to 1947 Restaurant, RR Nagar, Bengaluru - 98
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:w-1/2 flex flex-col gap-8 lg:p-8 xl:p-12 2xl:p-16">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <input
            type="hidden"
            defaultValue="215656cf-6822-4295-a464-341673bfb290"
            {...register("access_key")}
          />
          <input
            type="hidden"
            defaultValue="New Website Inquiry"
            {...register("subject")}
          />
          <input
            type="hidden"
            value="Pragathi Infra Realty"
            {...register("from_name")}
          />
          <div className="grid grid-cols-1 gap-4 lg:gap-6 xl:gap-12">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="bg-[#111b12] p-3 md:p-6 text-white rounded-2xl border-none focus:outline-[#F7C35F] focus:outline-1"
              {...register("name", {
                required: "Name is required",
              })}
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="bg-[#111b12] p-3 md:p-6 text-white rounded-2xl border-none focus:outline-[#F7C35F] focus:outline-1"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <input
              type="tel"
              placeholder=" Your Mobile Number"
              required
              className="bg-[#111b12] p-3 md:p-6 text-white rounded-2xl border-none focus:outline-[#F7C35F] focus:outline-1"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              className="bg-[#111b12] p-3 md:p-6 text-white rounded-2xl focus:outline-[#F7C35F] focus:outline-1"
              {...register("message", {
                required: "Message is required",
              })}
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-fit bg-[#F7C35F] text-[#263C28] font-semibold px-6 py-3 rounded-4xl flex items-center justify-center cursor-pointer"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
}

export default ContactSection;
