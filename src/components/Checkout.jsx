import { Breadcrumbs } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa";

const Checkout = () => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <div className="mx-auto max-w-7xl pt-20">
      <div className="my-5 h-12">
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              className="font-semibold text-[#3D3D3D]"
              to="/"
            >
              Home
            </Link>
            <Link
              underline="hover"
              className="font-semibold text-[#3D3D3D]"
              to="/shop"
            >
              Shop
            </Link>
            <Link underline="hover" aria-current="page" color="inherit">
              Checkout
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <div className="mb-40 flex">
        <div>
          <h1 className="mb-5 text-[17px] font-bold leading-4 text-[#3D3D3D]">
            Billing Address
          </h1>
          <div>
            <label className="mb-[10px] flex gap-1 text-[15px] font-medium leading-[15px] text-[#3D3D3D]">
              First Name <FaStarOfLife className="text-[#F03800]" />
            </label>
            <form className="h-10 w-[350px] rounded border border-gray-300">
              <input className="h-full px-3 rounded w-full outline-none" type="text" />
            </form>
            <form className="flex flex-col">
              <label className="mb-[10px] flex gap-1 text-[15px] font-medium leading-[15px] text-[#3D3D3D]">
                First Name
              </label>
              <input type="text" />
            </form>
          </div>
        </div>
        <div>Your Order</div>
      </div>
    </div>
  );
};

export default Checkout;
