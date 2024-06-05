import { Oval } from "react-loader-spinner";

function Loader() {
    return (
      <div className=" w-screen h-screen   flex justify-center items-center ">
        <Oval
          height={80}
          width={80}
          color="#081158"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#cfddee"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
}

export default Loader
