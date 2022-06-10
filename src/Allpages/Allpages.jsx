import React from "react";
import Cardes from "../components/Cardes/Cardes";
import Enquri from "../components/Enquri/Enquri";

import Headers from "../components/Header/Headers";
import Jobpost from "../components/JobPost/Jobpost";
import Sidebar from "../components/Siderbar/Sidebar";

function Allpages() {
  return (
    <>
      <div>
        <Headers />
      </div>
      <div className="flex">
        <Sidebar />
        <Cardes />
        <Jobpost />
      </div>
      <div className="flex">
        <Enquri />
      </div>
    </>
  );
}

export default Allpages;
