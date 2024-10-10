import { Button } from "../common";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col background-t py-40 text-white z-40 relative">
      <div className="flex flex-col  max-w-[1280px] mx-auto w-full">
        <div className="max-w-[687px] flex flex-col gap-8">
          <h1 className="text-[3.25rem] font-bold leading-[4.06rem]">
            Experience Luxury in the Heart of the City
          </h1>
          <p className="max-w-[489px]">
            Discover the perfect blend of luxury and comfort in our premium
            shortlet apartment, tailored for your next getaway or business trip.
          </p>
          <div className="flex gap-6">
            <Button theme="secondary" className=" md:px-8 max-w-[max-content]">
              Book Now
            </Button>
            <Button theme="primary" className=" md:px-8 max-w-[max-content]">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
