import React from "react";
import StatusBar from "./StatusBar";
import TextMsg from "./TextMsg";
import BellCircle from "./BellCircle";
import SendButton from "./SendButton";

const Screen = () => {
  return (
    <div className="bg-[#000000] sm:my-6 my-0  mx-auto w-[375px] h-[812px] ">
      <StatusBar />
        <TextMsg /> 
        <BellCircle />
      <SendButton/>
    </div>
  );
};

export default Screen;
