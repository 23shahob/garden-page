import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const LogIn = () => {
  const [changeTab, setChangeTab] = useState(1);

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="relative w-[500px] bg-white px-[100px] pt-12">
        <span className="absolute right-3 top-3">
          <IoMdClose className="h-5 w-5 text-[#46A358]" />
        </span>
        <div className="mb-14 flex h-4 items-center justify-center gap-3">
          <p
            onClick={() => {
              setChangeTab(1);
            }}
            className={`cursor-pointer text-xl font-medium leading-4 text-[#3D3D3D] ${changeTab === 1 ? "text-[#46A358]" : ""}`}
          >
            Login
          </p>
          <hr className="h-full w-[1px] border-none bg-gray-500" />
          <p
            onClick={() => {
              setChangeTab(2);
            }}
            className={`cursor-pointer text-xl font-medium leading-4 text-[#3D3D3D] ${changeTab === 2 ? "text-[#46A358]" : ""}`}
          >
            Register
          </p>
        </div>
        <div>
          <p className="mb-3 text-[13px] font-normal leading-4 text-[#3D3D3D]">
            Enter your username and password to login.
          </p>
          <form>
            <input className="h-10 w-[300px] border border-[#EAEAEA] rounded-md" type="text" />
            <input className="h-10 w-[300px] border border-[#EAEAEA] rounded-md" type="text" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
