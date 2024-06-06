import React, { useContext } from "react";
import { PLANTS } from "./API";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";

const NewArrivals = ({ priceRange }) => {
  const { addToCart, addToBasket, addToWish } = useContext(AppContext);

  return (
    <div className="mb-20 grid grid-cols-3 gap-10 bg-[#FBFBFB]">
      {PLANTS.slice(20, 29).map((second) => (
        <Link to="/shop">
          <div
            onClick={() => addToCart(second)}
            key={second.id}
            className="group relative border-t-2 border-white p-4 shadow-md transition-shadow hover:scale-[1.01] hover:border-t-2 hover:border-[#46A358] hover:shadow-lg hover:shadow-green-300"
          >
            <div className="relative mb-8 h-[250px] w-[250px]">
              <img
                className="object-cover"
                src={second.img}
                alt={`${second.name} Img`}
              />
              <div className="absolute bottom-0 flex translate-x-[50%] items-center justify-center gap-5 opacity-0 transition-opacity group-hover:opacity-100">
                <button
                  className="bg-transparent"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToBasket(second);
                  }}
                >
                  <IoCartOutline className="h-7 w-7 hover:text-[#46A358]" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToWish(flower);
                  }}
                  className="bg-transparent"
                >
                  <MdFavoriteBorder className="h-7 w-7 hover:text-[#46A358]" />
                </button>
                <button className="bg-transparent">
                  <IoSearch className="h-7 w-7 hover:text-[#46A358]" />
                </button>
              </div>
            </div>
            <div>
              <p className="mb-2 font-normal leading-4 text-[#3D3D3D]">
                {second.name}
              </p>
              <p className="text-lg font-bold leading-4 text-[#46A358]">
                ${second.price}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewArrivals;
