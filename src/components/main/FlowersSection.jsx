import React, { useState } from "react";
import Data from "../data/Data";
import Selecting from "./Selecting";
import SideBar from "./SideBar";

const FlowersSection = () => {
  const [changeTab, setChangeTab] = useState("All Plants");
  return (
    <div className="mx-auto flex max-w-7xl">
      <div>
        <SideBar />
      </div>
      <div className="pl-12">
        <Selecting setChangeTab={setChangeTab} />
        <Data changeTab={changeTab} />
      </div>
    </div>
  );
};

export default FlowersSection;
