import React from "react";
import { Button } from "../common";

const ContactUs = () => {
  return (
    <div className="flex max-w-[1280px] w-full mx-auto text-white">
      <div className="bg-custom-purple-100 max-w-[50%] w-full py-20 px-20 flex flex-col gap-10">
        <h3 className="text-[3.25rem] font-bold leading-[4.06rem]">
          Contact Us
        </h3>
        <p className="">
          We’re here to help! Whether you have a question about a booking, need
          assistance with your account, or want more information about one of
          our rental properties, our dedicated support team is just a message
          away.
        </p>
      </div>

      <form className="flex flex-col w-full max-w-[50%] px-12 py-2 text-black">
          <h3 className="text-[1.75rem] font-semibold">
            Book Apartment
          </h3>
          <div className="flex flex-col pt-16 gap-10  ">
                <div className="flex flex-col gap-2">
                  <label>Full Name</label>
                  <input className="bg-[#F9F7FC] h-12 w-full p-2 outline-none" />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Apartment Type</label>
                  <input className="bg-[#F9F7FC] h-12 w-full p-2 outline-none" />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Check-in Date</label>
                  <input className="bg-[#F9F7FC] h-12 w-full p-2 outline-none" type="date" />
                </div>

                <div className="flex flex-col gap-2">
                  <label>Special Request</label>
                  <textarea className="bg-[#F9F7FC]  w-full p-2 outline-none resize-none" rows={4}  />
                </div>

                <Button theme="secondary"> 
                  Send Message
                </Button>
          </div>
      </form>
    </div>
  );
};

export default ContactUs;
