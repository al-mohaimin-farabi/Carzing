import HomeCss from "./Home.Module.css";

const Hero = () => {
  return (
    <div
      className={`${HomeCss.HeroBg} flex justify-center  w-full bg-no-repeat bg-cover md:bg-cover py-[80px] lg:relative`}>
      <div className="max-w-[1280px] mx-2">
        <div className="w-full lg:w-[80%] text-center lg:text-start py-[0px]  lg:py-[80px]">
          <h1 className="font-extrabold text-4xl  lg:text-7xl text-white ">
            Renting cars have never been this easy
          </h1>
          <p className="text-base md:text-lg text-white py-4 w-full md:w-[60%] mx-auto lg:mx-0">
            Discover hassle-free car rentals with our seamless booking process.
            Your journey starts here.
          </p>
        </div>
        <div className="form w-full  mx-auto bg-white rounded lg:rounded-full py-4 px-8 lg:px-16 lg:flex justify-between  items-center lg:absolute lg:h-[150px] lg:drop-shadow-md  lg:left-[50%] max-w-[1240px] lg:translate-x-[-50%]">
          <div className="pickup-location flex flex-col my-2 lg:h-24 justify-center">
            <label
              className="uppercase mb-2 lg:mb-1 font-semibold lg:font-medium text-base"
              htmlFor="location">
              PICKUP LOCATION
            </label>
            <select
              className="border-2 p-2 border-[#BBC8D4] bg-white rounded-md w-full focus:outline-[#1F4590] mb-2"
              name="locations"
              id="location"
              placeholder="Select Location">
              <option className="p-4" value="volvo">
                Dhaka
              </option>
            </select>
          </div>
          <div className="pickup-date flex flex-col my-2 lg:h-24 justify-center">
            <label
              className="uppercase mb-2 lg:mb-1 font-semibold lg:font-medium text-base"
              htmlFor="pdate">
              Pickup date
            </label>
            <input
              className="border-2 p-2  border-[#BBC8D4] bg-white rounded-md w-full focus:outline-[#1F4590] mb-2"
              type="text"
              id="pdate"
              placeholder="Select Pickup Date"
              name="pdate"></input>
          </div>
          <div className="return-date flex flex-col my-2 lg:h-24 justify-center">
            <label
              className="uppercase mb-2 lg:mb-1 font-semibold lg:font-medium text-base"
              htmlFor="rdate ">
              Return date
            </label>
            <input
              className="border-2 p-2 border-[#BBC8D4] bg-white rounded-md w-full focus:outline-[#1F4590] mb-2"
              type="text"
              id="rdate"
              name="rdate"
              placeholder="Select Return Date"></input>
          </div>

          <div className="flex  my-0 lg:h-24 items-center">
            <button className="py-2 px-4 text-white rounded bg-[#1F4590] my-2">
              Search For Cars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
