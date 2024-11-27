import { navigationData } from "@/utils/data";
import Image from "next/image";
import React from "react";
import { Button } from "./Button";

const Header = () => {
  return (
    <div className=" max-w-[1280px] w-full mx-auto">
      <div className="flex w-full justify-between max-w-[1280px] z-50 bg-black/20 px-4 mx-auto fixed py-4  top-0">
      <div className="flex gap-10 items-center">
        <Image
          alt="Shortlet Portharcourt Logo"
          src={"/images/sh-port.png"}
          className="w-24 h-8 md:w-auto md:h-auto"
          width={174}
          height={51}
        />
        <div className="items-center hidden lg:flex gap-10">
          {navigationData.map((nav) => (
            <a className="text-white text-sm" key={nav.name} href={nav.route}>
              {nav.name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex gap-4 items-center text-white ">
        <a target="_blank" href="https://api.whatsapp.com/send?phone=2348109466000" className="underline">08109466000</a>
      <Button className="hidden md:flex" theme="primary">Book Now</Button>
      </div>
  
      </div>
    </div>
  );
};

export default Header;
