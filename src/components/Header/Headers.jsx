import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlinePoweroff } from "react-icons/ai";
import logo from "../../Images/logo.png";

function Headers() {
  return (
    <div className="shadow-lg  flex justify-center  h-20 ">
      <div className="flex font-mono  text-2xl mt-5  ">
        <img src={logo} className="w-20  h-10" />
        CerBosys
      </div>

      <div className=" flex ml-80 gap-5 mt-8 ">
        03:14 PM Monday <label> 12-8-2021</label>
        <div className="flex gap-20 ml-80    ">
          <BsFillBellFill />
          <AiOutlinePoweroff />
        </div>
      </div>
    </div>
  );
}

export default Headers;
