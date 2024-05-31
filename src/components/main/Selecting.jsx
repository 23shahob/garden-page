import React, { useState } from "react";

const Selecting = ({ setChangeTab }) => {
  const [selectedTab, setSelectedTab] = useState("All Plants");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setChangeTab(tab);
  };

  return (
    <div className="mb-8 flex w-full items-center justify-between">
      <ul className="flex gap-8">
        {["All Plants", "New Arrivals", "Sale"].map((tab) => (
          <li
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`cursor-pointer pb-2 text-[15px] leading-4 transition duration-300 hover:text-[#46A358] ${
              selectedTab === tab
                ? "border-b-2 border-[#46A358] font-bold text-[#46A358]"
                : "text-[#3D3D3D]"
            }`}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="ml-4 flex items-center">
        <p className="mr-2 text-[15px] font-normal leading-4 text-[#3D3D3D]">
          Sort by:
        </p>
        <select className="rounded border border-none border-gray-300 text-[15px] font-normal leading-4 text-[#3D3D3D] outline-none">
          <option value="default" hidden>
            Default sorting
          </option>
          <option value="flower">Low</option>
          <option value="price-asc">Normal</option>
          <option value="price-desc">High</option>
        </select>
      </div>
    </div>
  );
};

export default Selecting;
