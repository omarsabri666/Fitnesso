import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Links from "./Links";

function PlansSection() {
    return (
      <div className=" my-20 text-center w-full  space-y-6 md:text-left md:w-4/5">
        <h2 className=" text-omar text-6xl font-test  font-semibold ">
          Free home workouts <br /> and fitness plans
        </h2>
        <p className=" text-omar ">
          With free online classes people who don’t have the time or money to{" "}
          <br />
          afford a personal coach can make change their lives forever.
        </p>
        <div className=" px-1">
          <Links
            to="/FreeWorkout"
            icon={<MdOutlineKeyboardArrowRight />}
            text="VIEW ALL"
          />
        </div>
      </div>
    );
}

export default PlansSection
