"use client";
import React from "react";
import toast from "react-hot-toast";

const SendButton = () => {
  // defining function to send notifiations
  function sendNotification() {
    toast.success("Hey, This is notification!");
  }

  return (
    <div className="w-[327px] mx-auto mt-14">
      <button
        onClick={sendNotification}
        className="min-w-[327px] min-h-[42px] border-[1.4px] flex justify-center items-center
       border-[#DF522B] rounded-[8px] button-gradient bg-gradient-to-r from-[#4e041d] via-[#DF522B] to-transparent"
      >
        <p className="w-[144px] h-[16px] font-inter text-base font-semibold leading-4 tracking-tighter text-[#FFFFFF]">
          Send Notification
        </p>
      </button>
    </div>
  );
};

export default SendButton;
