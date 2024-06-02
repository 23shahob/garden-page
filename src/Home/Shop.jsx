// Shop.js
import React, { useContext } from "react";
import { AppContext } from "../components/AppContext";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { MdFavoriteBorder } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Description from "../components/Description";
import RelatedProducts from "../components/RelatedProducts";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

const Shop = () => {
  const {
    cart,
    handleSize,
    selectedSize,
    addToBasket,
    handleCountPlus,
    handleCountMinus,
    getCount,
  } = useContext(AppContext);
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <div className="mx-auto mb-32 max-w-7xl pt-20">
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
            <Link underline="hover" aria-current="page" color="inherit">
              Shop
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      {cart.length === 0 ? (
        <div className="flex h-96 items-center justify-center">
          <h1 className="text-5xl font-semibold text-[#46A358]">
            No items in the cart.
          </h1>
        </div>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index}>
              <div className="mb-20 flex gap-12">
                <div className="flex items-center gap-11 bg-[#FBFBFB]">
                  <div className="flex flex-col gap-y-4">
                    {[...Array(4)].map((_, i) => (
                      <img
                        key={i}
                        className="h-[100px] w-[100px]"
                        src={item.img}
                        alt="Img"
                      />
                    ))}
                  </div>
                  <div className="p-5">
                    <img
                      className="h-[400px] w-[400px]"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                </div>
                <div className="w-[50%]">
                  <h1 className="mb-5 text-[28px] font-bold leading-4 text-[#3D3D3D]">
                    {item.name}
                  </h1>
                  <div className="mb-4 flex items-center justify-between border-b border-green-100 pb-3">
                    <span className="text-[22px] font-bold leading-4 text-[#46A358]">
                      ${item.price}
                    </span>
                    <div className="flex items-center gap-3">
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating"
                          defaultValue={2.5}
                          precision={0.5}
                        />
                      </Stack>
                      <p className="text-[15px] font-normal leading-4 text-[#3D3D3D]">
                        19 Customer Reviews
                      </p>
                    </div>
                  </div>
                  <h2 className="mb-2 text-[15px] font-medium leading-4 text-[#3D3D3D]">
                    Short Description:
                  </h2>
                  <p className="mb-6 w-[70%] text-sm font-normal leading-6 text-[#727272]">
                    {item.description}
                  </p>
                  <div>
                    <h3 className="mb-3 text-[15px] font-medium leading-4 text-[#3D3D3D]">
                      Size:
                    </h3>
                    <div className="mb-5 flex gap-[10px]">
                      {["S", "M", "L", "XL"].map((size) => (
                        <button
                          key={size}
                          className={`flex h-7 w-7 items-center justify-center rounded-full border text-sm font-medium leading-4 transition duration-300 ${
                            selectedSize === size
                              ? "border-[#46A358] text-[#46A358]"
                              : "border-[#EAEAEA] text-[#727272]"
                          }`}
                          onClick={() => handleSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    <div className="mb-6 flex items-center gap-6">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleCountMinus(item.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#46A358] text-white transition duration-300 hover:bg-green-500"
                        >
                          -
                        </button>
                        <p className="text-xl font-normal leading-3 text-[#3D3D3D]">
                          {getCount(item.id)}
                        </p>
                        <button
                          onClick={() => handleCountPlus(item.id)}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#46A358] text-white transition duration-300 hover:bg-green-500"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex gap-[10px]">
                        <button className="h-10 w-[130px] rounded-lg bg-[#46A358] text-sm font-bold text-white transition duration-300 hover:bg-green-500">
                          BUY NOW
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addToBasket(item);
                          }}
                          className="h-10 w-[130px] rounded-lg border border-[#46A358] text-sm font-bold text-[#46A358] transition duration-300 hover:bg-[#46A358] hover:text-white"
                        >
                          ADD TO CART
                        </button>
                        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#46A358]">
                          <MdFavoriteBorder className="text-[#46A358]" />
                        </button>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="mb-[10px] text-[15px] font-normal leading-4 text-[#727272]">
                        <span className="text-[#A5A5A5]">SKU:</span>{" "}
                        1995751877966
                      </p>
                      <p className="mb-[10px] text-[15px] font-normal leading-4 text-[#727272]">
                        <span className="text-[#A5A5A5]">Categories:</span>{" "}
                        Potter Plants
                      </p>
                      <p className="text-[15px] font-normal leading-4 text-[#727272]">
                        <span className="text-[#A5A5A5]">Tags:</span> Home,
                        Garden, Plants
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <p className="text-[15px] font-medium leading-4 text-[#3D3D3D]">
                        Share this products:
                      </p>
                      <div className="flex gap-5">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaLinkedinIn />
                        <MdOutlineMailOutline />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Description />
              <h1 className="mb-5 border-b border-green-200 pb-4 text-[17px] font-bold leading-4 text-[#46A358]">
                Related Products
              </h1>
              <RelatedProducts />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
