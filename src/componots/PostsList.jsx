import { Link } from "react-router-dom";
import img from "../../public/perosn.jpeg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function PostsList({card}) {
    return (
      <div className="     shadow-xl  hover:-translate-y-1 transition-all cursor-pointer hover:opacity-70 relative">
        <div style={{backgroundImage:`url("${card.img}")`}} className=" bg-cover  bg-center rounded-lg  h-[600px]">
          
        </div>
        <div className=" bg-white rounded-lg  w-4/5 px-6  gap-4 py-5 flex flex-col absolute bottom-10 right-9">
          <div className=" flex items-center gap-4        h-10 ">
            <div className=" w-8  h-8 rounded-full">
              <img className="  w-full rounded-full h-full" src={img} alt="Post image" />
            </div>
              <h3 className=" text-sm font-test  text-omar">Sandy Smith</h3>
          </div>
          <p className=" text-omar     font-semibold">{card.text}</p>
          <Link className=" inline-flex items-center gap-2 text-omar "><span><MdOutlineKeyboardArrowRight/></span> Read more</Link>
        </div>

      </div>
    );
}

export default PostsList
