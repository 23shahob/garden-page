import React, { useContext } from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbReportAnalytics } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { AppContext } from "../../components/AppContext";
import { BiLogIn } from "react-icons/bi";
import AccountDetails from "./AccountDetails";
import Address from "./Address";
import Orders from "./Orders";
import WishList from "./WishList";

const Account = () => {
  const { selectedTab, setSelectedTab } = useContext(AppContext);

  return (
    <div className="mx-auto max-w-7xl pt-20">
      <div className="flex gap-7 pt-12">
        <div className="h-[420px] w-1/4 bg-[#FBFBFB] pb-5 pt-4">
          <p className="mb-4 px-[18px] text-lg font-bold leading-4 text-[#3D3D3D]">
            My Account
          </p>
          <ul className="mb-5 border-b border-green-200 pb-4">
            <li
              onClick={() => {
                setSelectedTab(1);
              }}
              className={`flex h-[39px] cursor-pointer items-center gap-2 border-l-[5px] border-l-white px-4 text-[#727272] transition duration-300 ${
                selectedTab === 1 && "border-l-[#46A358]"
              }`}
            >
              <FaRegUser
                className={`h-5 w-5 ${selectedTab === 1 && "text-[#46A358]"}`}
              />
              <span
                className={`text-[15px] font-normal leading-[45px] ${selectedTab === 1 && "font-bold text-[#46A358]"}`}
              >
                Account Details
              </span>
            </li>
            <li
              onClick={() => {
                setSelectedTab(2);
              }}
              className={`flex h-[39px] cursor-pointer items-center gap-2 border-l-[5px] border-l-white px-4 text-[#727272] transition duration-300 ${
                selectedTab === 2 && "border-l-[#46A358]"
              }`}
            >
              <IoLocationOutline
                className={`h-5 w-5 ${selectedTab === 2 && "text-[#46A358]"}`}
              />
              <span
                className={`text-[15px] font-normal leading-[45px] ${selectedTab === 2 && "font-bold text-[#46A358]"}`}
              >
                Address
              </span>
            </li>
            <li
              onClick={() => {
                setSelectedTab(3);
              }}
              className={`flex h-[39px] cursor-pointer items-center gap-2 border-l-[5px] border-l-white px-4 text-[#727272] transition duration-300 ${
                selectedTab === 3 && "border-l-[#46A358]"
              }`}
            >
              <IoCartOutline
                className={`h-5 w-5 ${selectedTab === 3 && "text-[#46A358]"}`}
              />
              <span
                className={`text-[15px] font-normal leading-[45px] ${selectedTab === 3 && "font-bold text-[#46A358]"}`}
              >
                Orders
              </span>
            </li>
            <li
              onClick={() => {
                setSelectedTab(4);
              }}
              className={`flex h-[39px] cursor-pointer items-center gap-2 border-l-[5px] border-l-white px-4 text-[#727272] transition duration-300 ${
                selectedTab === 4 && "border-l-[#46A358]"
              }`}
            >
              <FaRegHeart
                className={`h-5 w-5 ${selectedTab === 4 && "text-[#46A358]"}`}
              />
              <span
                className={`text-[15px] font-normal leading-[45px] ${selectedTab === 4 && "font-bold text-[#46A358]"}`}
              >
                Wishlist
              </span>
            </li>
            <li
              onClick={() => {
                setSelectedTab(5);
              }}
              className={`flex h-[39px] cursor-pointer items-center gap-2 border-l-[5px] border-l-white px-4 text-[#727272] transition duration-300 ${
                selectedTab === 5 && "border-l-[#46A358]"
              }`}
            >
              <TbReportAnalytics
                className={`h-5 w-5 ${selectedTab === 5 && "text-[#46A358]"}`}
              />
              <span
                className={`text-[15px] font-normal leading-[45px] ${selectedTab === 5 && "font-bold text-[#46A358]"}`}
              >
                Reports
              </span>
            </li>
            <li
              onClick={() => {
                setSelectedTab(6);
              }}
              className={`flex h-[39px] cursor-pointer items-center gap-2 border-l-[5px] border-l-white px-4 text-[#727272] transition duration-300 ${
                selectedTab === 6 && "border-l-[#46A358]"
              }`}
            >
              <FiDownload
                className={`h-5 w-5 ${selectedTab === 6 && "text-[#46A358]"}`}
              />
              <span
                className={`text-[15px] font-normal leading-[45px] ${selectedTab === 6 && "font-bold text-[#46A358]"}`}
              >
                Downloads
              </span>
            </li>
            <li
              onClick={() => {
                setSelectedTab(7);
              }}
              className={`flex h-[39px] cursor-pointer items-center gap-2 border-l-[5px] border-l-white px-4 text-[#727272] transition duration-300 ${
                selectedTab === 7 && "border-l-[#46A358]"
              }`}
            >
              <MdOutlineReportGmailerrorred
                className={`h-5 w-5 ${selectedTab === 7 && "text-[#46A358]"}`}
              />
              <span
                className={`text-[15px] font-normal leading-[45px] ${selectedTab === 7 && "font-bold text-[#46A358]"}`}
              >
                Supports
              </span>
            </li>
          </ul>
          <button className="flex items-center gap-2 px-[18px]">
            <BiLogIn className="h-5 w-5 text-[#46A358]" />
            <span className="font-bold leading-[15px] text-[#46A358]">
              Logout
            </span>
          </button>
        </div>
        <div className="w-3/4">
          {selectedTab === 1 && <AccountDetails />}
          {selectedTab === 2 && <Address />}
          {selectedTab === 3 && <Orders />}
          {/* {selectedTab === 4 && <WishList />} */}
        </div>
      </div>
    </div>
  );
};

export default Account;
