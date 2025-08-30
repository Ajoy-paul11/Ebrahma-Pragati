import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { Send } from "lucide-react";
import { RxCross1 } from "react-icons/rx";

interface FormData {
  access_key: string;
  subject: string;
  from_name: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}
interface LeadFormProps {
  setOpenLeadForm: React.Dispatch<React.SetStateAction<boolean>>;
}
function LeadForm({ setOpenLeadForm }: LeadFormProps) {
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
    <section className=" w-full h-screen flex justify-center lg:justify-end items-center bg-white/10 backdrop-blur-xs">
      <div className=" bg-[#263c28] relative border-[#F7C35F] border-1 rounded-3xl w-[80vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] 2xl:w-[20vw] p-4 m-2 md:m-6 lg:m-12 xl:m-16 pt-16">
        <div className=" bg-[#111b12] p-2 rounded-2xl absolute right-2 top-2 cursor-pointer">
          <RxCross1
            className="h-4 w-4 text-white float-right cursor-pointer"
            onClick={() => setOpenLeadForm(false)}
          />
        </div>
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
          <div className="grid grid-cols-1 gap-4 xl:gap-8 text-sm lg:text-base xl:text-lg">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="bg-[#111b12] p-3 md:p-4 text-white rounded-2xl border-none focus:outline-[#F7C35F] focus:outline-1"
              {...register("name", {
                required: "Name is required",
              })}
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="bg-[#111b12] p-3 md:p-4 text-white rounded-2xl border-none focus:outline-[#F7C35F] focus:outline-1"
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
              className="bg-[#111b12] p-3 md:p-4 text-white rounded-2xl border-none focus:outline-[#F7C35F] focus:outline-1"
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
              rows={3}
              required
              className="bg-[#111b12] p-3 md:p-4 text-white rounded-2xl focus:outline-[#F7C35F] focus:outline-1"
              {...register("message", {
                required: "Message is required",
              })}
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-fit mx-auto bg-[#F7C35F] text-[#263C28] font-semibold px-4 py-2 rounded-4xl flex items-center justify-center cursor-pointer text-sm md:text-base"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LeadForm;
