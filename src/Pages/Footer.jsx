
import { Link } from "react-router-dom";

function Footer() {

    
    
    return (
      <div className=" mt-40  text-white px-10 py-36 bg-omar gap-16 sm:gap-0 text-center md:text-left h-auto md:h-screen grid grid-cols-1 md:grid-cols-3">
        <h1 className="text-3xl hover:opacity-80 transition-all   text-white font-semibold">
          <Link className="flex  justify-center md:justify-start items-center" to="/">
            <span className="">Fit</span>
            <div className="flex flex-col relative">
              <div className=" h-[3px] absolute top-2 right-0 w-full bg-white"></div>
              <span>nesso</span>
            </div>
          </Link>
        </h1>
        <div className=" font-test flex  gap-6 flex-col">
          <h3 className=" font-test font-semibold text-3xl text-white">
            Contact
          </h3>
          <a
            className=" hover:opacity-80 transition-all text-white font-test"
            href="mailto:contact@fitnesso.com"
          >
            contact@fitnesso.com
          </a>
          <div className=" flex flex-col gap-2">
            <h3 className=" text-white">LICENCING</h3>
            <ul className=" flex gap-3 flex-col">
              <li>
                <a className=" hover:opacity-80 transition-all" href="#">
                  Copyright Omar Sabry
                </a>
              </li>
              <li>
                <a className=" hover:opacity-80 transition-all" href="#">
                  Powered By Omar
                </a>
              </li>
              <li>
                <a className=" hover:opacity-80 transition-all" href="#">
                  Licencing
                </a>
              </li>
              <li>
                <a className=" hover:opacity-80 transition-all" href="#">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" font-test flex flex-col gap-4 text-3xl text-white">
          <h3>EXPLORE</h3>
          <ul className=" text-xl flex flex-col gap-3">
            <li>
              <a className=" hover:opacity-80 transition-all" href="#">
                Premium Courses
              </a>
            </li>
            <li>
              <a className=" hover:opacity-80 transition-all" href="#">
                Free Courses
              </a>
            </li>
            <li>
              <a className=" hover:opacity-80 transition-all" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className=" hover:opacity-80 transition-all" href="#">
                About
              </a>
            </li>
            <li>
              <a className=" hover:opacity-80 transition-all" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Footer
