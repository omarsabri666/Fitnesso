import { useEffect } from "react";
import img from "../../public/hero free.jpeg"
import ContactForm from "../componots/ContactForm";
import HeroSlide from "../componots/HeroSlide";
import PaidPlans from "../componots/PaidPlans";
import Header from "./Header";
function Shop() {
     useEffect(() => {
       window.scrollTo({ top: 0 });
     }, []);
    return (
      <div>
        <div>
          <Header />
        </div>
        <div
          role="img"
          aria-label="Decorative background image"
          aria-hidden="true"
          style={{ backgroundImage: `url("${img}")` }}
          className="  flex justify-center items-center  my-20 rounded-lg shadow-xl bg-cover bg-center w-screen h-screen"
        >
          <div className=" w-full h-[200px] skew-y-2  items-center  justify-center  flex  text-center  bg-omar">
            <h2 className="  text-white text-7xl font-semibold">
              Premium Programs
            </h2>
          </div>
        </div>

        <div>
          <PaidPlans />
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

export default Shop
