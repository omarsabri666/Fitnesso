import { useEffect } from "react";
import img from "../../public/hero free.jpeg"
import ContactForm from "../componots/ContactForm";
import FreeWorkouts from "../componots/FreeWorkouts";
import HeroSlide from "../componots/HeroSlide";
import Header from "./Header";
function FreeWorkoutPage() {
     useEffect(() => {
       window.scrollTo({ top: 0 });
     }, []);
    return (
      <div>
        <div className=" ">
          <Header />
        </div>
        <div
          role="img"
          aria-label="Decorative background image"
          aria-hidden="true"
          style={{ backgroundImage: `url("${img}")` }}
          className="  flex justify-center items-center  my-20 rounded-lg shadow-xl bg-cover bg-center w-screen h-screen"
        >
          <div className=" w-full h-[200px] skew-y-2  items-center  justify-center  flex  text-center bg-[#cfddee]">
            <h2 className="  text-omar text-7xl font-semibold">
              Free home workouts
            </h2>
          </div>
        </div>
        <div>
          <FreeWorkouts />
        </div>
        <div>
          <ContactForm />
        </div>
        <div>
          <HeroSlide />
        </div>
      </div>
    );
}

export default FreeWorkoutPage
