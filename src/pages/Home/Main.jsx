import L1 from "../../assets/l1.svg";
import L2 from "../../assets/l2.svg";
import L3 from "../../assets/l3.svg";
import L4 from "../../assets/l4.svg";
import L5 from "../../assets/l5.svg";
import pin from "../../assets/Pin.svg";
import shield from "../../assets/Shield.svg";
import Bookmark from "../../assets/Bookmark.svg";
import testimonilaImg from "../../assets/Testimonial-Image.png";
import Marquee from "react-fast-marquee";

const Main = () => {
  return (
    <main className=" max-w-[1280px] mx-auto lg:my-14 py-[80px]  ">
      <Marquee
        autoFill="true"
        pauseOnHover="true"
        gradient="true"
        gradientColor="white"
        gradientWidth="50px">
        <img className="w-full p-2" src={L1} alt="" />
        <img className="w-full p-2" src={L2} alt="" />
        <img className="w-full p-2" src={L3} alt="" />
        <img className="w-full p-2" src={L4} alt="" />
        <img className="w-full p-2" src={L5} alt="" />
      </Marquee>

      <div className="w-full py-[80px] lg:my-2 ">
        <div className="text-center">
          <h4 className="text-[#000000] text-4xl font-extrabold p-4">
            Why We Are Different
          </h4>
          <p className="text-[#6D7D8B] lg:w-[50%] mx-2 lg:mx-auto">
            We stand out through innovation, not imitation, and our commitment
            to excellence sets us apart from the rest.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12 mx-2">
          <div className="shadow-2xl px-6 py-12 flex flex-col justify-center items-center text-center my-2">
            <img className="my-2" src={Bookmark} alt="" />

            <h6 className="font-normal text-2xl my-4">Easy Booking</h6>
            <p className="my-2 ">
              Experience hassle-free travel arrangements with our
              straightforward and user-friendly booking system.
            </p>
          </div>
          <div className="shadow-2xl px-6 py-12 flex flex-col justify-center items-center text-center my-2">
            <img className="my-2" src={shield} alt="" />

            <h6 className="font-normal text-2xl my-4">Secure Payments</h6>
            <p className="my-2 ">
              Rest easy with our secure payment options, ensuring your
              transactions are safe and protected.
            </p>
          </div>
          <div className="shadow-2xl px-6 py-12 flex flex-col justify-center items-center text-center my-2">
            <img className="my-2" src={pin} alt="" />

            <h6 className="font-normal text-2xl my-4">24/7 Tracking</h6>
            <p className="my-2 ">
              Stay informed around the clock with our 24/7 tracking services,
              keeping you in the loop every step of the way.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full  lg:py-[40px] lg:my-2">
        <div className="text-center">
          <h4 className="text-[#000000] text-4xl font-extrabold p-4">
            What do people say about us?
          </h4>
          <p className="text-[#6D7D8B] lg:w-[50%] mx-2 lg:mx-auto">
            Discover the testimonials and feedback from people who have chosen
            our services and shared their positive experiences with our team.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12 mx-2">
          <div className="hidden lg:block  rounded">
            <img src={testimonilaImg} alt="" />
          </div>
          <div className="testimonila-text bg-[#1F4590] rounded text-white p-6">
            <blockquote className="flex flex-col justify-center items-start h-full">
              <q className="font-light text-sm">
                I’ve had the privilege of partnering with this company for
                several years, and I must say it has been an exceptional
                journey. Their unwavering commitment to delivering top-notch
                service is truly commendable. From the moment we engaged with
                their team, it was evident that their expertise and dedication
                would set the standard for our collaborative projects. Their
                attention to detail and innovative solutions have consistently
                exceeded our expectations. What truly sets them apart is their
                passion for excellence. They take the time to understand our
                unique needs, and their tailored approach demonstrates a deep
                understanding of our goals. The results speak for themselves -
                consistently outstanding. Moreover, their team is a pleasure to
                work with. Their professionalism, responsiveness, and ability to
                adapt to evolving challenges are qualities that are hard to
                find. Whether it’s problem-solving or simply providing support,
                they have been a reliable partner every step of the way.
              </q>
              <footer className="mt-6 w-[40%] broder border-t">
                <cite className="text-sm font-semibold">
                  - Anna De’Suza, <br />
                  CEO at SpaceX
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
