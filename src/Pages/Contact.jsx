
import { useForm } from "react-hook-form";
import Header from "./Header";
import { useEffect } from "react";
import { toast } from "react-toastify";
function Contact() {
   useEffect(() => {
     window.scrollTo({ top: 0 });
   }, []);
   const {
     register,
     handleSubmit,
 
     reset,
 
   } = useForm();
   function onSubmit() {
     reset();
         toast.success("Email was sent successfully");

   }

  return (
    <>
      <div className=" md:py-2">
        <Header />
      </div>
      <div className=" px-4 md:px-0 my-20 grid md:grid-cols-2 gap-4 grid-cols-1 ">
        <div className=" flex my-20 text-center md:text-left px-2 md:px-0 flex-col gap-5">
          <h2 className=" text-omar font-test font-semibold text-lg">
            CONTACT
          </h2>
          <h3 className=" text-omar font-test text-6xl font-semibold">
            Get in touch <br /> today to schedule <br /> your discovery call.
          </h3>
          <p className=" text-omar font-test text-lg">
            Just fill out this short form on the right to get started in your
            life changing journey. If you prefer you can contact us below
            directly.
          </p>
          <div className=" flex flex-col gap-2">
            <h4 className=" text-omar font-semibold ">EMAIL</h4>
            <a
              className=" text-omar font-semibold  text-2xl hover:opacity-80 transition-all"
              href="mailto:contact@fitnesso.com"
            >
              contact@fitnesso.com
            </a>
          </div>
          <div className=" flex flex-col gap-2">
            <h4 className=" text-omar font-semibold ">PHONE</h4>

            <a
              className=" text-omar font-semibold  text-2xl hover:opacity-80 transition-all"
              href="tel:+381 73 49 032"
            >
              +381 73 49 032
            </a>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" px-10  md:gap-8  gap-2 flex flex-col rounded-lg shadow-xl justify-center items-center bg-[#cfddee]"
        >
          <div className="   flex-col sm:flex-row flex  py-4 md:py-0 gap-2 sm:gap-10">
            <input
              required
              placeholder="Full Name"
              className=" placeholder:text-omar  focus:outline-none focus:ring focus:ring-offset-4 focus:ringoffset-[#606abc] focus:ring-[#606abc] bg-[rgba(32,52,146,0.1)] shadow-xl rounded-md py-4 px-6"
              type="text"
              {...register("name")}
            />
            <input
              required
              placeholder="Current weight"
              className=" placeholder:text-omar  focus:outline-none focus:ring focus:ring-offset-4 focus:ringoffset-[#606abc] focus:ring-[#606abc] bg-[rgba(32,52,146,0.1)] shadow-xl rounded-md py-4 px-6"
              type="number"
              {...register("current")}
            />
          </div>
          <div className="   flex-col sm:flex-row flex  py-4 md:py-0 gap-2 sm:gap-10">
            <input
              required
              placeholder="Goal Weight"
              className=" placeholder:text-omar  focus:outline-none focus:ring focus:ring-offset-4 focus:ringoffset-[#606abc] focus:ring-[#606abc] bg-[rgba(32,52,146,0.1)] shadow-xl rounded-md py-4 px-6"
              type="number"
              {...register("goal")}
            />
            <input
              required
              placeholder="Email"
              className=" placeholder:text-omar  focus:outline-none focus:ring focus:ring-offset-4 focus:ringoffset-[#606abc] focus:ring-[#606abc] bg-[rgba(32,52,146,0.1)] shadow-xl rounded-md py-4 px-6"
              type="email"
              {...register("email")}
            />
          </div>
          <textarea
            required
            placeholder="Describe Your Goals"
            className=" w-full px-6   py-4  placeholder:font-abc placeholder:text-omar  focus:outline-none focus:ring focus:ring-offset-4 focus:ringoffset-[#606abc] focus:ring-[#606abc] bg-[rgba(32,52,146,0.1)] shadow-xl rounded-md "
            cols="30"
            rows="10"
            {...register("describe")}
          ></textarea>
          <button className="text-white w-full font-semibold  my-4  md:my-0 text-lg  bg-omar speical-hover  py-6 rounded-lg ">
            GET IN TOUCH
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
