import React, { useEffect, useState, useContext } from "react";
import { PLANTS } from "./API";
import NewArrivals from "./NewArrivals";
import Sale from "./Sale";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";

const Data = ({ changeTab, priceRange }) => {
  const { addToCart, addToBasket } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = 4;

  useEffect(() => {
    setData(PLANTS);
  }, []);

  const filteredData = data
    .filter((plant) => {
      if (changeTab === "All Plants") return true;
      if (changeTab === "New Arrivals") return false;
      if (changeTab === "Sale") return false;
      return false;
    })
    .filter(
      (plant) => plant.price >= priceRange[0] && plant.price <= priceRange[1]
    );

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-full">
      {changeTab === "New Arrivals" ? (
        <NewArrivals />
      ) : changeTab === "Sale" ? (
        <Sale />
      ) : (
        <>
          <div className="mb-20 grid grid-cols-3 gap-10 bg-[#FBFBFB]">
            {displayedData.map((flower) => (
              <Link to="/shop" key={flower.id}>
                <div
                  onClick={() => addToCart(flower)}
                  key={flower.id}
                  className="group relative border-t-2 border-white p-4 shadow-md hover:border-t-2 hover:border-[#46A358]"
                >
                  <div className="relative mb-8 h-[250px] w-[250px]">
                    <img
                      className="object-cover"
                      src={flower.img}
                      alt={`${flower.name} Img`}
                    />
                    <div className="absolute bottom-0 flex translate-x-[50%] items-center justify-center gap-5 opacity-0 transition-opacity group-hover:opacity-100">
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
              </Link>
            ))}
          </div>
          <div className="flex justify-end">
            {currentPage > 1 && (
              <button
                className="mx-1 rounded bg-[#46A358] px-4 py-2 font-bold text-white hover:bg-[#3D9F58]"
                onClick={handlePreviousClick}
              >
                Previous
              </button>
            )}
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                className={`mx-1 rounded px-4 py-2 ${
                  currentPage === page
                    ? "bg-[#46A358] font-bold text-white"
                    : "text-[#3D3D3D]"
                } hover:bg-[#46A358] hover:text-white`}
                onClick={() => handlePageClick(page)}
              >
                {page}
              </button>
            ))}
            <button
              className={`ml-2 rounded px-4 py-2 font-bold ${
                currentPage === totalPages
                  ? "cursor-not-allowed bg-gray-300 text-gray-500"
                  : "bg-[#46A358] text-white hover:bg-[#3D9F58]"
              }`}
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Data;
