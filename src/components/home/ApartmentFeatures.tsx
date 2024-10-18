import Image from "next/image";
import React from "react";
import ApartmentSingleFeatures from "../ApartmentSingleFeatures";
import WifiIcon from "../common/icons/Wifi";
import CoffeeIcon from "../common/icons/CofeeIcon";
import WindIcon from "../common/icons/WindIcon";
import ZapIcon from "../common/icons/Zapicon";

const ApartmentFeatures = () => {
  
  return (
    <div className="min-h-screen   bg-white relative z-0 max-w-full   lg:max-w-[1280px] mx-auto">
      {/* Absolute image clip */}
      <Image
        alt="Featured Image"
        src={"/images/shortlets/features-image.jpg"}
        className="hidden xl:block circle-path absolute -top-40 -right-10 z-0"
        width={800}
        height={800}
      />

      <div className="flex flex-col py-8 px-4 lg:py-[172px] gap-8 md:gap-16 ">
        <div className="flex flex-col max-w-[412px] mx-auto xl:mx-0 gap-2  md:gap-7 ">
          <h3 className="text-[2rem] text-center leading-[2.52rem] md:text-[3.25rem] font-bold md:leading-[4.05rem]">
            Apartment Features
          </h3>
          <p className="text-sm md:text-base text-black/80 ">
            We are all about out customer’s comfort, providing beautiful and
            comfortable apartment .
          </p>
        </div>

        <div className="flex flex-wrap gap-5 md:gap-10  justify-center">
          <ApartmentSingleFeatures Icon={WifiIcon} title="High-Speed WiFi" description="Stay connected with our lightning-fast internet." />
          <ApartmentSingleFeatures Icon={CoffeeIcon} title="Fully Equipped Kitchen"  description="Cook your favorite meals in our modern kitchen."/>
          <ApartmentSingleFeatures Icon={WindIcon} title="Premium Amenities"  description="Enjoy luxury toiletries and comfortable bedding."/>
          <ApartmentSingleFeatures Icon={ZapIcon} title="24/7 Power Supply"  description="Enjoy uninterrupted power supply through your stay."/>
        </div>
      </div>
    </div>
  );
};

export default ApartmentFeatures;
