import { motion } from "framer-motion";
import img1 from "../../public/slide1.jpeg"
import img3 from "../../public/slide2.jpeg"
import img4 from "../../public/slide4.jpeg"
import img5 from "../../public/65aafbf0c75a4375e7c51992_guillaume-bolduc-cfmBbDcCAQo-unsplash-p-500.jpeg"
import img6 from "../../public/slide5.jpeg"
import { FaTwitter } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


function HeroSlide() {
    // #ec8675
    
    return (
      <motion.div className=" h-screen relative md:grid px-2 md:grid-cols-3 my-40 hidden gap-y-28  gap-x-3  bg-[#eef0f4]">
        <div className=" w-72  h-72">
          <img className="  rounded-lg shadow-xl w-full h-full" src={img1} alt="hero image in a slide" />
        </div>
        <div className=" w-72  h-72">
          <img className=" rounded-lg shadow-xl w-full h-full" src={img4} alt="hero image in a slide" />
        </div>
        <div className=" w-72  h-72">
          <img className=" rounded-lg shadow-xl w-full h-full" src={img3} alt="hero image in a slide" />
        </div>
        <div className=" w-72  h-72">
          <img className=" rounded-lg shadow-xl w-full h-full" src={img5} alt="hero image in a slide" />
        </div>
        <div className=" w-72  h-72">
          <img className=" rounded-lg shadow-xl w-full h-full" src={img3} alt="hero image in a slide" />
        </div>
        <div className=" w-72  h-72">
          <img className=" rounded-lg shadow-xl w-full h-full" src={img6} alt="hero image in a slide" />
        </div>
        <div className="  skew-y-3 col-span-3 flex  justify-around w-full  items-center  h-64 bg-[#ec8675] absolute right-0 top-48">
          <a
            className=" inline-flex hover:opacity-80 transition-all gap-4 items-center"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className=" flex justify-center items-center w-10 h-10 rounded-full bg-white ">
              <span className=" text-2xl text-[#ec8675]">
                <FaTwitter />
              </span>
            </div>
            <span className=" text-white text-3xl   font-semibold">
              @fitnesso
            </span>
          </a>
          <a
            className=" inline-flex hover:opacity-80 transition-all gap-4 items-center"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className=" flex justify-center items-center w-10 h-10 rounded-full bg-white ">
              <span className=" text-2xl text-[#ec8675]">
                <FaInstagram />
              </span>
            </div>
            <span className=" text-white text-3xl   font-semibold">
              @fitnesso
            </span>
          </a>
          <a
            className=" inline-flex hover:opacity-80 transition-all gap-4 items-center"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className=" flex justify-center items-center w-10 h-10 rounded-full bg-white ">
              <span className=" text-2xl text-[#ec8675]">
                <FaLinkedin />
              </span>
            </div>
            <span className=" text-white text-3xl   font-semibold">
              Fitnesso
            </span>
          </a>
          <a
            className=" inline-flex hover:opacity-80 transition-all gap-4 items-center"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className=" flex justify-center items-center w-10 h-10 rounded-full bg-white ">
              <span className=" text-2xl text-[#ec8675]">
                <FaYoutube />
              </span>
            </div>
            <span className=" text-white text-3xl   font-semibold">
              /Fitnesso
            </span>
          </a>
        </div>
      </motion.div>
    );
}

export default HeroSlide
