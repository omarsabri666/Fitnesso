import Links from "./Links";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Path() {
    return (
      <div className="  text-center my-20">
        <h3 className=" text-omar font-test font-semibold text-5xl">
          The journey to a healthier <br /> body starts right now
        </h3>
        <div className=" my-6">

        <Links
          to="/Contact"
          icon={<MdOutlineKeyboardArrowRight />}
          text="Online coaching"
          type={`big`}
          />
          </div>
      </div>
    );
}

export default Path
