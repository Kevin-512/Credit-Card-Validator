import { background, creditCard } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col w-full min-h-screen"
    >
      <div className="flex-grow flex bg-background justify-center mx-auto pt-28 relative">
        <h1 className="pt-28 absolute text-start text-8xl font-bold text-amber-400">
          <span className="z-10">
            Validate and Check
            <br/> <span className="text-red-500">Credit Card</span>
            <br/> Combinations
          </span>
        </h1>
        <img src={creditCard} alt="" className=" z-10 absolute w-[50%] h-[50%] flex bottom-0 left-1/2 pr-48 transform -translate-x-1/2"/>
        <img src={background} alt="" className="w-full h-full object-cover rounded-lg" />
      </div>
    </section>
  );
};

export default Hero;
