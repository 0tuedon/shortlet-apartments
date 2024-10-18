import { useState } from "react";
import ExpandDown from "./common/icons/ExpandDown";
import clsx from "clsx";

const FaqSingle = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" max-w-[664px]  rounded-[10px] shadow-faq bg-white w-full gap-4 flex flex-col min-h-[60px] px-6 py-4">
      <div className="flex justify-between items-start w-full ">
        <p className="font-semibold">How do I book a rental property?</p>
        <ExpandDown
        onClick={()=>{setIsOpen(!isOpen)}}
          className={clsx("cursor-pointer", {
            "rotate-180": !isOpen,
          })}
        />
      </div>
      <div
        className={clsx("", {
          flex: isOpen,
          hidden: !isOpen,
        })}
      >
        <p className="text-sm md:text-base">
          You can browse available properties on our platform, select your
          desired dates, and complete the booking process through our secure
          online system.
        </p>
      </div>
    </div>
  );
};

export default FaqSingle;
