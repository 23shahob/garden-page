import React, { useState } from "react";
import Data from "../data/Data";
import Selecting from "./Selecting";
import SideBar from "./SideBar";

const FlowersSection = () => {
  const [changeTab, setChangeTab] = useState("All Plants");
  const [priceRange, setPriceRange] = useState([39, 1230]);
  
  return (
    <div className="mx-auto mb-20 flex max-w-7xl">
      <div>
        <SideBar setPriceRange={setPriceRange} />
      </div>
      <div className="pl-12">
        <Selecting setChangeTab={setChangeTab} />
        <Data changeTab={changeTab} priceRange={priceRange} />
      </div>
    </div>
  );
};

export default FlowersSection;
