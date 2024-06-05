import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Header from "./Header";
import { Link } from "react-router-dom";
import img1 from "../../public/about hero1.jpeg"
import img2 from "../../public/about pic 2.jpeg"
import img4 from "../../public/about pic3.jpeg"
import Links from "../componots/Links";
import img3 from "../../public/65aafbf0c75a4375e7c5198d_angelos-michalopoulos-S3Rs0DcvvK0-unsplash-p-500.jpeg";
import HeroSlide from "../componots/HeroSlide";



function About() {
//   #d2e4e0
    return (
      <>
        <div className="   md:px-0 bg-[#d2e4e0]">
          <div className=" md:py-2  md:px-4">
            <Header />
            <div className=" section-min-height  gap-10 px-2   md:px-0  overflow-y-hidden  my-20  grid grid-cols-1 md:grid-cols-2">
              <div className="   text-center md:text-left  flex-col flex">
                <h2 className=" py-4 text-omar ">Hi i&apos;m Sandra Lyons </h2>
                <h3 className=" text-omar text-6xl font-test  font-semibold">
                  Who can benefit from a fully custom online fitness plan &
                  nutrition?
                </h3>
                <p className=" font-test text-lg my-5  text-omar">
                  Literally everyone. I’m currently helping people from 12 to
                  60+ years old. Everyone is getting an adjusted program and a
                  meal plan.
                </p>
                <div className=" text-center md:text-left">
                  <Link
                    to="/Contact"
                    className=" speical-hover mx-1 py-4 px-8 bg-omar text-white w-fit items-center rounded-md justify-center  inline-flex  font-test"
                  >
                    <span className=" text-xl">
                      <MdOutlineKeyboardArrowRight />
                    </span>{" "}
                    BOOK A CALL
                  </Link>
                </div>
              </div>
              <div className="relative ">
                <div className="    h-[700px] ">
                  <img
                    className="   w-full  h-full  rounded-xl  "
                    // src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    src={img1}
                    alt="hero img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" px-2 md:px-0 my-40">
          <div className=" space-y-6  text-center">
            <h2 className=" text-6xl text-omar font-test  font-semibold">
              How does online fitness <br /> coaching work ?
            </h2>
            <p className=" text-omar font-test text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros <br /> elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
          </div>
          <div className=" my-20">
            <img
              className=" rounded-lg shadow-xl hover:opacity-80 transition-all"
              src={img2}
              alt=""
            />
          </div>
          <div className="  my-20  flex flex-col md:flex-row text-center md:text-left  gap-5">
            <div className=" md:basis-1/2 w-full justify-self-center self-center space-y-8">
              <h2 className=" font-test text-omar text-5xl font-semibold">
                I am Aaron
              </h2>
              <p className=" text-omar text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="  md:items-start items-center flex flex-col gap-4">
                <li className=" inline-flex text-omar font-test text-lg font-semibold items-center gap-4">
                  {" "}
                  <span className=" text-lg font-hero text-[#8ea5a0]">01</span>
                  Over 10 years of experience
                </li>
                <li className=" inline-flex text-omar font-test text-lg font-semibold items-center gap-4">
                  {" "}
                  <span className=" text-lg font-hero text-[#8ea5a0]">02</span>
                  Coached 2,000+ people
                </li>
                <li className=" inline-flex text-omar font-test text-lg font-semibold items-center gap-4">
                  {" "}
                  <span className=" text-lg font-hero text-[#8ea5a0]">03</span>
                  Bachelors in nutrition
                </li>
              </ul>
              <div className="  px-1">
                <Links
                  to="/Contact"
                  type="big"
                  text="SCHEDULE A CALL"
                  icon={<MdOutlineKeyboardArrowRight />}
                />
              </div>
            </div>
            <div className=" self-start justify-self-start w-full px-4 md:px-0 md:basis-1/2 relative h-[500px] bg-omar">
              <div className=" md:absolute  flex items-center justify-center md:block    py-4 md:py-0  md:top-44  md:right-20  w-full  md:w-96 ">
                <img
                  className=" rounded-lg shadow-lg"
                  src={img3}
                  alt="hero image"
                />
              </div>
            </div>
          </div>
          <div className="   my-64  flex   flex-col-reverse md:flex-row  gap-5">
            <div className=" self-start justify-self-start md:basis-1/2 w-full relative h-[500px] bg-omar">
              <div className=" md:absolute flex items-center justify-center md:block  static px-4  md:px-0  md:top-44 top-36  right-2  md:right-20  w-full md:w-96 ">
                <img
                  className=" rounded-lg shadow-lg"
                  src={img4}
                  alt="hero image"
                />
              </div>
            </div>
            <div className=" md:basis-1/2  text-center md:text-left   w-full  px-10 self-center  space-y-8">
              <h2 className=" font-test text-omar text-5xl font-semibold">
                I am Aaron
              </h2>
              <p className=" text-omar text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className=" items-center md:items-start flex flex-col gap-4">
                <li className=" inline-flex text-omar font-test text-lg font-semibold items-center gap-4">
                  {" "}
                  <span className=" text-lg font-hero text-[#8ea5a0]">01</span>
                  Over 10 years of experience
                </li>
                <li className=" inline-flex text-omar font-test text-lg font-semibold items-center gap-4">
                  {" "}
                  <span className=" text-lg font-hero text-[#8ea5a0]">02</span>
                  Coached 2,000+ people
                </li>
                <li className=" inline-flex text-omar font-test text-lg font-semibold items-center gap-4">
                  {" "}
                  <span className=" text-lg font-hero text-[#8ea5a0]">03</span>
                  Bachelors in nutrition
                </li>
              </ul>
              <div className="  px-1">
                <Links
                  to="/Contact"
                  type="big"
                  text="SCHEDULE A CALL"
                  icon={<MdOutlineKeyboardArrowRight />}
                />
              </div>
            </div>
          </div>
          
          <div className=" my-20">
            <HeroSlide />
          </div>
        </div>
      </>
    );
}

export default About
