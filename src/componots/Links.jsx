import { Link } from "react-router-dom";

function Links({to,text,type,icon}) {
    return (
      <Link
        className={` ${
          type === "small" ? " px-6 py-2" : " px-8 py-4"
        } speical-hover  bg-omar text-white w-fit items-center rounded-md justify-center  inline-flex  font-test`}
        to={to}
      >
        {" "}
        <span className={`${type === "small" ? "text-xl" : "text-3xl"}`}>
          {icon}
        </span>
        {text}
      </Link>
    );
}

export default Links
