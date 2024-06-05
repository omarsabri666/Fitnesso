import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


function NavBar() {
  const [toggle,setToggle] = useState(false) 
  function handleClose(){
    setToggle(false)
  }
    useEffect(() => {
      if (toggle) {
        document.body.style.overflowY = "hidden"; // Disable vertical scroll
      } else {
        document.body.style.overflowY = "auto"; // Enable vertical scroll
      }
    }, [toggle]);
    return (
      <nav className=" flex relative   items-center justify-between ">
        <h1 className="text-3xl   text-omar font-semibold">
          <Link className="flex items-center" to="/">
            <span className="">Fit</span>
            <div className="flex flex-col relative">
              <div className=" h-[3px] absolute top-2 right-0 w-full bg-omar"></div>
              <span>nesso</span>
            </div>
          </Link>
        </h1>

        <ul className=" md:flex items-center gap-7 hidden ">
          <li className="   font-[400] text-omar">
            <NavLink to="/About"> About </NavLink>
          </li>
          <li className="   font-[400] text-omar">
            <NavLink to="/FreeWorkout"> Free Workouts </NavLink>
          </li>
          <li className="font-[400] text-omar">
            <NavLink to="/shop"> Shop </NavLink>
          </li>

          <li className="   font-[400] text-omar">
            <NavLink
              className="speical-hover bg-omar     px-6 rounded-md  inline-flex py-2 items-center  text-white"
              to="/Contact"
            >
              <span className=" font-test text-xl">
                <MdOutlineKeyboardArrowRight />
              </span>{" "}
              Book A Call{" "}
            </NavLink>
          </li>
        </ul>
        {/* <div className=" md:flex gap-4 hidden ">
          <button className=" font-bold hover:text-omar transition-all">
            Sign In
          </button>
          <button className=" bg-omar py-3 px-7 rounded-sm shadow-lg text-white ">
            Register
          </button>
        </div> */}
        <button onClick={() => setToggle(true)} className=" md:hidden px-3">
          {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </button>
        <AnimatePresence>
          {toggle && (
            <motion.div
              key="navBarPhone" // Add the key prop
              initial={{ x: "100%" }}
              animate={{ x: toggle ? "0%" : "100%" }}
              transition={{ duration: 0.5 }}
              exit={{ x: "100%" }}
              className=" absolute   z-20  text-center flex flex-col  -top-3 -right-2  bg-[#cfddee] h-[101vh]  overscroll-y-none     w-[101vw] "
            >
              <button
                onClick={handleClose}
                className=" text-omar  text-lg self-end px-4 my-7"
              >
                &#10005;
              </button>
              <ul className=" md:hidden gap-6 justify-center  flex flex-col ">
                <li className="      h-11">
                  <NavLink onClick={handleClose} to="/About">
                    {" "}
                    About{" "}
                  </NavLink>
                </li>
                <li className="   h-11">
                  <NavLink onClick={handleClose} to="/FreeWorkout">
                    {" "}
                    Free Workouts{" "}
                  </NavLink>
                </li>
                <li className="   h-11">
                  <NavLink onClick={handleClose} to="/shop">
                    {" "}
                    Shop{" "}
                  </NavLink>
                </li>
                <li className="   font-[400] text-omar">
                  <NavLink
                    onClick={handleClose}
                    className="speical-hover bg-omar     px-6 rounded-md  inline-flex py-2 items-center  text-white"
                    to="/Contact"
                  >
                    <span className=" font-test text-xl">
                      <MdOutlineKeyboardArrowRight />
                    </span>{" "}
                    Book A Call{" "}
                  </NavLink>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    );
}

export default NavBar
