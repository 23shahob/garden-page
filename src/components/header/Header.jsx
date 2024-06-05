import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { BiLogIn } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { AppContext } from "../AppContext";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Header = () => {
  const [isActiveSearch, setIsActiveSearch] = useState(true);
  const { basketCount, setSearch } = useContext(AppContext);

  return (
    <div className="fixed z-10 h-16 w-full border-b border-green-200 bg-white">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between">
        <div>
          <Link to="./">
            <img src={Logo} alt="Site Logo  " />
          </Link>
        </div>
        <ul className="flex gap-7">
          <li className="font-normal text-[#3D3D3D] hover:text-[#46A358]">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="font-normal text-[#3D3D3D] hover:text-[#46A358]">
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li className="font-normal text-[#3D3D3D] hover:text-[#46A358]">
            <NavLink to="/plantcare">Plant Care</NavLink>
          </li>
          <li className="font-normal text-[#3D3D3D] hover:text-[#46A358]">
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li className="font-normal text-[#3D3D3D] hover:text-[#46A358]">
            {/* <NavLink to="/account">Account</NavLink> */}
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
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
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
          <div className="relative cursor-pointer">
            <Link to="/shop/cart">
              <IoCartOutline className="h-6 w-6 hover:text-green-500" />
              {basketCount > 0 && (
                <div className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#46A358] text-xs text-white">
                  {basketCount}
                </div>
              )}
            </Link>
          </div>
          <div className="flex">
            <SignedOut>
              <SignInButton>
                <button className="flex h-[35px] w-[100px] items-center justify-center gap-2 rounded-lg bg-[#46A358] text-white transition duration-300 hover:bg-green-500">
                  <BiLogIn className="h-5 w-5" />
                  <span>Log in</span>
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
