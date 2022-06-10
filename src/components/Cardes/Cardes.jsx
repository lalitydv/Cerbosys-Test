import React from "react";
import { FcBusinessContact } from "react-icons/fc";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import Enquri from "../Enquri/Enquri";

function Cardes() {
  return (
    <>
      <div className=" shadow-2xl  w-52 h-48  rounded-2xl  p-5 m-20">
        <BsFillBriefcaseFill className=" text-center w-28     h-20 bg-fuchsia-600 fill-white rounded-2xl   " />{" "}
        current Opning
        <h1>6</h1>
      </div>
      <div className=" shadow-2xl  w-52 h-52  rounded-2xl  p-5 m-20">
        <FcBusinessContact
          className=" text-center w-20 h-16  bg-violet-800 
          fill-white
          rounded-2xl"
        />
        Cureer Apllication
        <h1>25</h1>
      </div>
      <div className=" shadow-2xl  w-52 h-48  rounded-2xl  p-5 m-20">
        <AiFillMail className=" text-center w-20 h-16 bg-teal-500    fill-white rounded-2xl   " />
        Total Enqury
        <h1>6</h1>
      </div>
      <br />
      {/* <Enquri /> */}
    </>
  );
}

export default Cardes;
