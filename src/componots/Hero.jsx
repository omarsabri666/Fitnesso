
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img1 from "../../public/65aafbf0c75a4375e7c51918_Rectangle 439 (1).png"

function Hero() {

    return (
      <div className=" section-min-height  gap-10   px-4 md:px-0  py-20  grid grid-cols-1 md:grid-cols-2">
        <div className="relative ">
          <div className="  ">
            <img
              className="   w-full   rounded-xl  "
              // src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              src={img1}
              alt="hero img"
            />
            <h2 className=" font-hero text-[#8ea5a0] -z-10 -top-8 right-12 hidden md:block  text-4xl md:text-7xl absolute md:-top-[3.5rem] md:right-[3.3rem]">
              Sandra Lyons
            </h2>
          </div>
        </div>
        <div className="    justify-center items-center md:items-start md:justify-start  flex-col flex">
          <h2 className=" py-4 text-omar ">Hi i&apos;m Sandra Lyons </h2>
          <h3 className=" text-omar md:text-6xl text-5xl text-center md:text-left font-test  font-semibold">
            Your go <br /> to online fitness <br /> trainer and <br /> nutritionist.
          </h3>
          <p className=" font-test text-lg my-5  text-omar">
            After getting a bachelors in nutrition and fitness training I
            started working with people all around and changing their lives
            forever.
          </p>
          <Link to="/Contact" className=" speical-hover py-4 px-8 bg-omar text-white w-fit items-center rounded-md justify-center  inline-flex  font-test">
            <span className=" text-xl">
              <MdOutlineKeyboardArrowRight />
            </span>{" "}
            Online coaching
          </Link>
        </div>
      </div>
    );
}

export default Hero
