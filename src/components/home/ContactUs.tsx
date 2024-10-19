"use client";
import { useRouter } from "next/navigation";
import { Button } from "../common";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  fullName: string;
  checkInDate: string;
  apartmentType: string;
  specialRequest: string;
};
const ContactUs = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const metaParams = encodeURIComponent(`Good day, my name is ${data.fullName}. ’d like to book your ${data.apartmentType} from ${data.checkInDate}.  ${data.specialRequest ? "Special Request: " + data.specialRequest : ""}`);

    router.push(`https://api.whatsapp.com/send?phone=2348094902833&text=${metaParams}`);
  };

  return (
    <div className="flex max-w-[1280px] flex-col lg:flex-row w-full mx-auto text-white pb-10 md:pb-20">
      <div className="bg-custom-purple-100 lg:max-w-[50%] w-full px-4 py-10 md:py-20 md:px-20 flex flex-col gap-4 md:gap-10">
        <h3 className="heading">Contact Us</h3>
        <p className="">
          We’re here to help! Whether you have a question about a booking, need
          assistance with your account, or want more information about one of
          our rental properties, our dedicated support team is just a message
          away.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full lg:max-w-[50%] px-4 md:px-12 py-6 text-black"
      >
        <h3 className="heading">Book Apartment</h3>
        <div className="flex flex-col pt-16 gap-10  ">
          <div className="flex flex-col gap-2">
            <label>Full Name *</label>
            <input
              className="bg-[#F9F7FC] h-12 w-full p-2 outline-none"
              {...register("fullName")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Apartment Type *</label>
            <select className="bg-[#F9F7FC] h-12 w-full p-2 outline-none" {...register("apartmentType")}>
              <option value={"Standard Studio"}>Standard Studio</option>
              <option value={"Executive Studio"}>Executive Studio</option>
              <option value={"1 Bedroom"}>1 Bedroom</option>
              <option value={"2 Bedroom"}>2 Bedroom</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label>Check-in Date *</label>
            <input
              className="bg-[#F9F7FC] h-12 w-full p-2 outline-none"
              type="date"
              {...register("checkInDate")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Special Request (Optional) </label>
            <textarea
              className="bg-[#F9F7FC]  w-full p-2 outline-none resize-none"
              rows={4}
              {...register("specialRequest")}
            />
          </div>

          <Button type="submit" theme="secondary">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
