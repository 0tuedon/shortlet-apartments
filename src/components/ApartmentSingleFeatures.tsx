import { FC, SVGProps } from "react";
import WifiIcon from "./common/icons/Wifi";

interface IFeatures  {
    title: string;
    description: string
    Icon: React.FunctionComponent<SVGProps<SVGSVGElement>>
}

const ApartmentSingleFeatures:FC<IFeatures> = ({title, description, Icon}) => {
  return (
    <div className="border min-w-[290px] max-w-[290px] min-h-[360px] max-h-[360px] border-custom-purple-100 py-8 px-7 rounded-[10px] flex flex-col justify-between">
        <div className="bg-custom-purple-100/80 min-h-[100px] min-w-[100px] max-h-[100px] max-w-[100px] rounded-full flex justify-center items-center">
                <Icon />
        </div>
      <div className="flex flex-col gap-4">
        <h5 className=" text-[1.75rem] font-semibold">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ApartmentSingleFeatures;
