import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


function FreeWorkoutItem({card}) {
    return (
      <div className="cursor-pointer hover:-translate-y-4 transition-all rounded-lg shadow-lg bg-white flex flex-col gap-4 group">
        <div className="w-full h-96 relative">
          <img
            className="rounded-t-lg w-full h-full absolute inset-0 object-cover transition-opacity group-hover:opacity-70"
            src={card.img}
            alt="Workout image"
          />
        </div>
        <div className="flex justify-around items-center">
          <h3 className="text-omar">{card.time}</h3>
          <div className=" flex flex-col">
            <h3 className="font-hero text-[#ec8675]">{card.type}</h3>
            <h4 className=" line-through text-gray-400 text-sm font-test">
              {card?.discount}
            </h4>
          </div>
        </div>
        <h3 className="mx-[3.7rem] text-omar text-2xl font-semibold">
          {card.name}
        </h3>
        <Link className="mx-[3.5rem] pb-10 text-omar text-lg inline-flex items-center gap-1">
          {" "}
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>
          Train now
        </Link>
      </div>
    );
}

export default FreeWorkoutItem
