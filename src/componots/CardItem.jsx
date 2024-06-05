function CardItem({card}) {
   
    return (
      <div className="  text-center flex flex-col gap-6 ">
        <div className=" flex justify-center">
            <div className="   w-72  h-80">

          <img className=" rounded-lg shadow-xl w-full  h-full" src={card.img} alt="Card image" />
            </div>
        </div>

        <h1 className="   text-omar text-2xl font-semibold font-test">
          {card.heading} <br /> {card.headingTwo}{" "}
        </h1>
        <p className=" font-test text-omar">{card.subHeading}</p>
      </div>
    );
}

export default CardItem
