import React from "react";
import { MdSignalCellularAlt } from "react-icons/md";
import { MdOutlineWifi } from "react-icons/md";
import { CiBatteryFull } from "react-icons/ci";
import { TiLocationArrow } from "react-icons/ti";

const StatusBar = () => {
  return (
    <div className="  w-[375px] h-[44px] flex justify-between items-center">
      {/* left side */}
      <div class=" h-full w-[96px] flex justify-center items-center">
        {/* icons */}
        <div className="w-[47px] h-[21px] gap-3 flex items-center justify-center">
          <span className="w-[16px] h-[21px] font-sans  font-semibold">
            1:11
          </span>
          <span className="w-[16px] h-[21px] text-[#FFFFFF] text-xl">
            <TiLocationArrow />
          </span>
        </div>
      </div>

      {/* right side */}
      <div className=" h-full w-[96px] flex justify-center items-center">
        {/* icons */}
        <div className="w-[72px] h-[16px] top-[16px] flex left-[8px] gap-[4px]">
          <span className="w-[20px] h-[16px] text-[#FFFFFF]">
            <MdSignalCellularAlt />
          </span>
          <span className="w-[16px] h-[16px] text-[#FFFFFF]">
            <MdOutlineWifi />
          </span>
          <span className="w-[28px] h-[16px] text-[#FFFFFF]">
            <CiBatteryFull />
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
