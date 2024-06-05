import img2 from "../../public/hero2.png"

function Hero2() {
    return (
      <div
        role="img"
        aria-label="Decorative background image"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.635), rgba(0, 0, 0, 0.5)), url(${img2})`,
        }}
        className="flex  justify-center items-center    bg-center  h-[66vh] bg-cover  w-full my-10"
      >
        <h2 className="font-hero text-5xl  text-center  text-white">
          SWEAT. GAIN. DO.
        </h2>
      </div>
    );
}

export default Hero2
