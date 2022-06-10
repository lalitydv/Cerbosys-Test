import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { BsCartFill } from "react-icons/bs";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";
import { BsFileEarmarkRichtext } from "react-icons/bs";
import { BsFillChatSquareFill } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="bg-blue-900   w-96 rounded-2xl p-20  ml-10   shadow-2xl gap-24  ">
      <div>
        <img
          className="w-40 h-40 rounded-full mx-auto  pb-5 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFWZZzqSlJb3Y05-XpC9d3BPyhwMH1VQhoQ&usqp=CAU"
          alt=""
        />
        <h3 className="text-white ml-16 ">Emma Weast</h3>
      </div>

      <h1 className="flex text-white  gap-5 mt-10">
        <RiDashboardFill className="fill-white  w-12  h-10  " />
        Dashbord
      </h1>
      <h1 className="flex text-white  gap-5 mt-10">
        <BsCartFill className="fill-white  w-12  h-10  " />
        Career
      </h1>
      <h1 className="flex text-white  gap-5 mt-10">
        <BsFillBriefcaseFill className="fill-white   w-12  h-10  " />
        Enquiry
      </h1>
      <h1 className="flex text-white  gap-5 mt-10">
        <FaBloggerB className="fill-white  w-12  h-10  " />
        Bloge
      </h1>
      <h1 className="flex  text-white  gap-5 mt-10">
        <BsFillChatSquareFill className="fill-white  w-12  h-10  " />
        Chat
      </h1>
      <h1 className="flex text-white  gap-5 mt-10">
        <BsFileEarmarkRichtext className="fill-white  w-12  h-10" />
        Quote Enquiry
      </h1>
    </div>
  );
}

export default Sidebar;
