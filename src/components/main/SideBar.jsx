import React, { useState } from "react";
import RangeSlider from "../Slider";
import Supersale from "../../assets/images/supersale.svg";

const SideBar = ({ setPriceRange }) => {
  const [category, setCategory] = useState(1);
  return (
    <div className="w-[310px] bg-[#FBFBFB] px-4 py-3">
      <div>
        <p className="mb-5 text-lg font-bold leading-4 text-[#3D3D3D]">
          Categories
        </p>
        <ul className="mb-9 px-3">
          <li
            onClick={() => setCategory(1)}
            className={`mb-6 flex cursor-pointer justify-between text-[15px] font-normal text-[#3D3D3D] hover:text-[#46A358]
            ${category === 1 && "text-[#46A358]"}`}
          >
            <span>House Plants</span>
            <span>(33)</span>
          </li>
          <li
            onClick={() => setCategory(2)}
            className={`mb-6 flex cursor-pointer justify-between text-[15px] font-normal text-[#3D3D3D] hover:text-[#46A358]
            ${category === 2 && "text-[#46A358]"}`}
          >
            <span>Potter Plants</span>
            <span>(12)</span>
          </li>
          <li
            onClick={() => setCategory(3)}
            className={`mb-6 flex cursor-pointer justify-between text-[15px] font-normal text-[#3D3D3D] hover:text-[#46A358]
            ${category === 3 && "text-[#46A358]"}`}
          >
            <span>Seeds</span>
            <span>(65)</span>
          </li>
          <li
            onClick={() => setCategory(4)}
            className={`mb-6 flex cursor-pointer justify-between text-[15px] font-normal text-[#3D3D3D] hover:text-[#46A358]
            ${category === 4 && "text-[#46A358]"}`}
          >
            <span>Small Plants</span>
            <span>(39)</span>
          </li>
          <li
            onClick={() => setCategory(5)}
            className={`mb-6 flex cursor-pointer justify-between text-[15px] font-normal text-[#3D3D3D] hover:text-[#46A358]
            ${category === 5 && "text-[#46A358]"}`}
          >
            <span>Big Plants</span>
            <span>(23)</span>
          </li>
          <li
            onClick={() => setCategory(6)}
            className={`mb-6 flex cursor-pointer justify-between text-[15px] font-normal text-[#3D3D3D] hover:text-[#46A358]
            ${category === 6 && "text-[#46A358]"}`}
          >
            <span>Succulents</span>
            <span>(17)</span>
          </li>
          <li
            onClick={() => setCategory(7)}
            className={`mb-6 flex cursor-pointer justify-between text-[15px] font-normal text-[#3D3D3D] hover:text-[#46A358]
            ${category === 7 && "text-[#46A358]"}`}
          >
            <span>Trerrariums</span>
            <span>(19)</span>
          </li>
          <li
            onClick={() => setCategory(8)}
            className={`mb-6 flex cursor-pointer justify-between text-[15px] font-normal text-[#3D3D3D] hover:text-[#46A358]
            ${category === 8 && "text-[#46A358]"}`}
          >
            <span>Gardening</span>
            <span>(13)</span>
          </li>
          <li
            onClick={() => setCategory(9)}
            className={`mb-6 flex cursor-pointer justify-between text-[15px] font-normal text-[#3D3D3D] hover:text-[#46A358]
            ${category === 9 && "text-[#46A358]"}`}
          >
            <span>Accessories</span>
            <span>(18)</span>
          </li>
        </ul>
      </div>
      <div className="mb-12">
        <p className="mb-5 text-lg font-bold leading-4 text-[#3D3D3D]">
          Price Range
        </p>
        <div className="px-3">
          <div className="mb-4">
            <RangeSlider setPriceRange={setPriceRange} />
          </div>
          {/* <button className="h-[35px] w-[90px] rounded-lg bg-[#46A358] font-bold leading-5 text-white outline-none hover:bg-green-500">
            Filter
          </button> */}
        </div>
      </div>
      <div className="mb-5">
        <p className="mb-2 text-lg font-bold leading-4 text-[#3D3D3D]">Size</p>
        <ul className="px-3">
          <li className="flex justify-between text-[15px] leading-10 text-[#3D3D3D]">
            <span>Small</span>
            <span>(119)</span>
          </li>
          <li className="flex justify-between text-[15px] leading-10 text-[#3D3D3D]">
            <span>Medium</span>
            <span>(86)</span>
          </li>
          <li className="flex justify-between text-[15px] leading-10 text-[#3D3D3D]">
            <span>Large</span>
            <span>(78)</span>
          </li>
        </ul>
      </div>
      <img src={Supersale} alt="Super Sale" />
    </div>
  );
};

export default SideBar;
