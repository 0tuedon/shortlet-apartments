import { FC, SVGProps } from "react";

interface IFeatures  {
    title: string;
    description: string
    Icon: React.FunctionComponent<SVGProps<SVGSVGElement>>
}

const ApartmentSingleFeatures:FC<IFeatures> = ({title, description, Icon}) => {
  return (
    <div className="border w-full max-w-full md:min-w-[290px] md:max-w-[290px] md:min-h-[360px] md:max-h-[360px] border-custom-purple-100 px-4 py-8 md:px-7 rounded-[10px] flex flex-col justify-between gap-2">
        <div className="bg-custom-purple-100/80 min-h-[80px] min-w-[80px] max-h-[80px] max-w-[80px]  md:min-h-[100px] md:min-w-[100px] md:max-h-[100px] md:max-w-[100px] rounded-full flex justify-center items-center">
                <Icon />
        </div>
      <div className="flex flex-col gap-3 md:gap-4">
        <h5 className="text-xl md:text-[1.75rem] font-semibold">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ApartmentSingleFeatures;
