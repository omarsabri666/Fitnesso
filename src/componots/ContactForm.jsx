import { useForm } from "react-hook-form";
import img from "../../public/hero form.jpeg"
import { toast } from "react-toastify";
function ContactForm() {
   
   const {
     register,
     handleSubmit,
    
     reset,
     
   } = useForm();
   function onSubmit(){
    toast.success("Check Your Email")
reset()
   }
  return (
    <div
      style={{ backgroundImage: `url("${img}")` }}
      className=" flex  my-40 bg-cover bg-center h-[100vh]"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" mx-4 md:px-0 bg-[#cfddee] max-w-5xl   rounded-xl shadow-xl justify-center md:h-[80%] h-auto my-auto flex-col items-center  md:mx-auto flex "
      >
        <div className=" text-center w-[70%]  my-16 space-y-6 ">
          <h2 className=" text-omar text-5xl md:text-6xl font-semibold">
            Get our free meal plan
          </h2>
          <p className=" text-omar text-lg">
            Signup to our newsletter to get a free 30 day meal plan. You will
            receive all guidance on what to eat, how to cook and how much to
            eat.
          </p>
        </div>
        <div className=" px-4 md:px-0  flex-col md:flex-row flex gap-4">
          <input
            required
            placeholder="Full Name"
            className=" placeholder:text-omar  focus:outline-none focus:ring focus:ring-offset-4 focus:ringoffset-[#606abc] focus:ring-[#606abc] bg-[rgba(32,52,146,0.1)] shadow-xl rounded-md py-4 px-10"
            type="text"
            {...register("name")}
          />
          <input
            required
            placeholder="Email"
            className=" placeholder:text-omar  focus:outline-none focus:ring focus:ring-offset-4 focus:ringoffset-[#606abc] focus:ring-[#606abc] bg-[rgba(32,52,146,0.1)] shadow-xl rounded-md py-4 px-10"
            type="text"
            {...register("email")}
          />
          <div className=" my-3 md:my-0 text-center md:text-left  ">
            <button className=" speical-hover shadow-xl   text-white font-semibold bg-omar  md:px-12 rounded-md px-20 py-4  md:py-4 inline-flex items-center">
              SIGNUP
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm

