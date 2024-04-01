import React from "react";
import { PiBell } from "react-icons/pi";

const BellCircle = () => {
  return (
    <div className="w-[344px] h-[344px] mt-16 flex justify-center items-center mx-auto">
      {/* circles */}
      <div className="w-[344px]  h-[344px] flex justify-center items-center  border-gradient">
        <div className="w-[278px] h-[278px]  flex justify-center items-center border-gradient">
          <div className="w-[222px] h-[222px]  flex justify-center items-center border-gradient">
            <div className="w-[160px] h-[160px]  flex justify-center items-center border-gradient">
              <div className="w-[100px] h-[100px] bg-custom-gradient  flex justify-center items-center rounded-full">
                <PiBell className="w-[64px] h-[64px] opacity-95" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BellCircle;
