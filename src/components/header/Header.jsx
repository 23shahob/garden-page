import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { BiLogIn } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isActiveSearch, setIsActiveSearch] = useState(true);
  return (
    <div className="fixed z-10 w-full h-16 border-b border-green-200 bg-white">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        <div>
          <Link to="./">
            <img src={Logo} alt="Site Logo  " />
          </Link>
        </div>
        <ul className="flex gap-7">
          <li className="font-normal text-[#3D3D3D] hover:text-[#46A358]">
            <NavLink to="./">Home</NavLink>
          </li>
          <li className="font-normal text-[#3D3D3D] hover:text-[#46A358]">
            <NavLink to="./shop">Shop</NavLink>
          </li>
          <li className="font-normal text-[#3D3D3D] hover:text-[#46A358]">
            <NavLink to="./plantcare">Plant Care</NavLink>
          </li>
          <li className="font-normal text-[#3D3D3D] hover:text-[#46A358]">
            <NavLink to="./blogs">Blogs</NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <div className="cursor-pointer">
            {isActiveSearch ? (
              <IoSearch
                className="h-5 w-5 hover:text-green-500"
                onClick={() => {
                  setIsActiveSearch(false);
                }}
              />
            ) : (
              <div className="flex items-center gap-2">
                <form className="h-9 w-[350px] rounded-lg border border-[#46A358] px-4">
                  <input
                    placeholder="Search something..."
                    className="h-full w-full outline-none placeholder:text-[#3D3D3D]"
                    type="search"
                  />
                </form>
                <IoMdClose
                  className="right-2 h-5 w-5"
                  onClick={() => {
                    setIsActiveSearch(true);
                  }}
                />
              </div>
            )}
          </div>
          <div className="cursor-pointer">
            <Link to="/cart">
              <IoCartOutline className="h-6 w-6 hover:text-green-500" />
            </Link>
          </div>
          <div className="flex h-[35px] w-[100px] items-center justify-around rounded-lg bg-[#46A358] hover:bg-green-500">
            <button className="flex items-center gap-1 text-white">
              <BiLogIn className="h-5 w-5" /> <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
