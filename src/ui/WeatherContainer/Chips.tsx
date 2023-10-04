import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { GiWindsock } from "react-icons/gi";
import { BiLogoTailwindCss, BiFlag } from "react-icons/bi";
import { WiHumidity } from "react-icons/wi";
import { VscDebugBreakpointConditionalUnverified } from "react-icons/vsc";

interface IData {
  data: string;
  value: string | number;
}

const weatherParamsMapping = {
  temperature: { icon: <CiTempHigh />, bgColor: "#6EE7B7", unit: "°" },
  humidity: { icon: <WiHumidity />, bgColor: "#C3DAFE", unit: "%" },
  conditions: {
    icon: <VscDebugBreakpointConditionalUnverified />,
    bgColor: "#718096",
    unit: "",
  },
  wind_speed: { icon: <BiLogoTailwindCss />, bgColor: "#518096", unit: "ms" },
  wind_direction: { icon: <GiWindsock />, bgColor: "#71CE96", unit: "" },
  country: { icon: <BiFlag />, bgColor: "#71CE96", unit: "" },
};
const convertString = (str: string): string => {
  return str.replace(/_/g, " ");
};

const Chips: React.FC<IData> = ({ data, value }) => {
  const mappingKey = data.toLowerCase() as keyof typeof weatherParamsMapping;
  const { icon, bgColor, unit } = weatherParamsMapping[mappingKey] || {};

  const chipStyle = {
    background: bgColor || "#718096",
    width: "150px",
    height: "150px",
  };

  return (
    <div>
      <div
        className="flex items-center justify-center font-bold text-sm relative rounded-lg"
        style={chipStyle}
      >
        <div className="w-full flex flex-wrap justify-start font-extrabold items-center absolute top-1 pl-1 opacity-40">
          <div className="text-lg">{icon}</div>
          {convertString(data).toUpperCase()}
        </div>
        <div className="text-4xl items-center justify-center">
          {value}
          {unit}
        </div>
      </div>
    </div>
  );
};

export default Chips;
