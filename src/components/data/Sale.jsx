import React, { useContext } from "react";
import { PLANTS } from "./API";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";

const Sale = ({ priceRange }) => {
  const { addToCart, addToBasket } = useContext(AppContext);
  return (
    <div className="mb-20 grid grid-cols-3 gap-10 bg-[#FBFBFB]">
      {PLANTS.slice(26, 35).map((third) => (
        <Link to="/shop">
          <div
            onClick={() => addToCart(third)}
            key={third.id}
            className="group relative border-t-2 border-white p-4 shadow-md hover:border-t-2 hover:border-[#46A358]"
          >
            <div className="relative mb-8 h-[250px] w-[250px]">
              <img
                className="object-cover"
                src={third.img}
                alt={`${third.name} Img`}
              />
              <div className="absolute bottom-0 flex translate-x-[50%] items-center justify-center gap-5 opacity-0 transition-opacity group-hover:opacity-100">
                <button
                  className="bg-transparent"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToBasket(third);
                  }}
                >
                  <IoCartOutline className="h-7 w-7 hover:text-[#46A358]" />
                </button>
                <button className="bg-transparent">
                  <MdFavoriteBorder className="h-7 w-7 hover:text-[#46A358]" />
                </button>
                <button className="bg-transparent">
                  <IoSearch className="h-7 w-7 hover:text-[#46A358]" />
                </button>
              </div>
            </div>
            <div>
              <p className="mb-2 font-normal leading-4 text-[#3D3D3D]">
                {third.name}
              </p>
              <p className="text-lg font-bold leading-4 text-[#46A358]">
                ${third.price}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sale;
