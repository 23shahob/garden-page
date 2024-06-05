import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppContext } from "./AppContext";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { PLANTS } from "./data/API";

const RelatedProducts = () => {
  const { addToCart, addToBasket } = useContext(AppContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative mx-auto max-w-7xl">
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <div className="grid grid-cols-5 gap-6">
              {PLANTS.slice(0, 5).map((flower) => (
                <div
                  onClick={() => addToCart(flower)}
                  key={flower.id}
                  className="group relative cursor-pointer border-t-2 border-white p-4 shadow-md hover:border-t-2 hover:border-[#46A358]"
                >
                  <div className="relative mb-8 h-[250px] w-[220px]">
                    <img
                      className="object-cover"
                      src={flower.img}
                      alt={`${flower.name} Img`}
                    />
                    <div className="absolute bottom-0 flex translate-x-[40%] items-center justify-center gap-5 opacity-0 transition-opacity group-hover:opacity-100">
                      <button
                        className="bg-transparent"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation()
                          addToBasket(flower);
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
                      {flower.name}
                    </p>
                    <p className="text-lg font-bold leading-4 text-[#46A358]">
                      ${flower.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-5 gap-6">
              {PLANTS.slice(6, 11).map((flower) => (
                <div
                  onClick={() => addToCart(flower)}
                  key={flower.id}
                  className="group relative cursor-pointer border-t-2 border-white p-4 shadow-md hover:border-t-2 hover:border-[#46A358]"
                >
                  <div className="relative mb-8 h-[250px] w-[220px]">
                    <img
                      className="object-cover"
                      src={flower.img}
                      alt={`${flower.name} Img`}
                    />
                    <div className="absolute bottom-0 flex translate-x-[40%] items-center justify-center gap-5 opacity-0 transition-opacity group-hover:opacity-100">
                      <button
                        className="bg-transparent"
                        onClick={(e) => {
                          e.preventDefault();
                          addToBasket(flower);
                        }}
                      >
                        <IoCartOutline className="h-7 h-7 w-7 w-7 hover:text-[#46A358]" />
                      </button>
                      <button className="bg-transparent">
                        <MdFavoriteBorder className="h-7 h-7 w-7 w-7 hover:text-[#46A358]" />
                      </button>
                      <button className="bg-transparent">
                        <IoSearch className="h-7 h-7 w-7 w-7 hover:text-[#46A358]" />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 font-normal leading-4 text-[#3D3D3D]">
                      {flower.name}
                    </p>
                    <p className="text-lg font-bold leading-4 text-[#46A358]">
                      ${flower.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-5 gap-6">
              {PLANTS.slice(12, 17).map((flower) => (
                <div
                  onClick={() => addToCart(flower)}
                  key={flower.id}
                  className="group relative cursor-pointer border-t-2 border-white p-4 shadow-md hover:border-t-2 hover:border-[#46A358]"
                >
                  <div className="relative mb-8 h-[250px] w-[220px]">
                    <img
                      className="object-cover"
                      src={flower.img}
                      alt={`${flower.name} Img`}
                    />
                    <div className="absolute bottom-0 flex translate-x-[40%] items-center justify-center gap-5 opacity-0 transition-opacity group-hover:opacity-100">
                      <button
                        className="bg-transparent"
                        onClick={(e) => {
                          e.preventDefault();
                          addToBasket(flower);
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
                      {flower.name}
                    </p>
                    <p className="text-lg font-bold leading-4 text-[#46A358]">
                      ${flower.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default RelatedProducts;
