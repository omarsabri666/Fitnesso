import Links from "./Links";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img4 from "../../public/65aafbf0c75a4375e7c51912_Rectangle 441.png";


function Hero3() {
    return (
      <div className="  my-20  flex flex-col md:flex-row text-center md:text-left  gap-5">
        <div className=" md:basis-1/2  w-full justify-self-center self-center space-y-8">
          <h2 className=" font-test text-omar text-5xl font-semibold">
            Who can benefit <br /> from a fully custom <br /> online fitness
            plan <br /> and nutrition?
          </h2>
          <p className=" text-omar text-lg">
            Literally everyone. I’m currently helping people from 12 <br /> to
            60+ years old. Everyone is getting an adjusted <br /> program and a
            meal plan.
          </p>
          <div className="  px-1">
            <Links
              to="/Contact"
              type="big"
              text="BOOK A CALL"
              icon={<MdOutlineKeyboardArrowRight />}
            />
          </div>
        </div>
        <div className=" md:self-start  md:justify-self-start md:basis-1/2  w-full relative h-[500px] bg-omar">
          <div className=" md:absolute  py-3 md:py-0 px-4 sm:px-0  flex justify-center items-center md:block  static md:top-44  md:right-20  top-32 right-5 w-full  md:w-96 ">
            <img className=" rounded-lg shadow-lg" src={img4} alt="hero image" />
          </div>
        </div>
      </div>
    );
}

export default Hero3
