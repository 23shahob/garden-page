import React, { useEffect, useState } from "react";
import { PLANTS } from "./API";

const Data = ({ changeTab }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = 4;

  useEffect(() => {
    setData(PLANTS);
  }, []);

  const filteredData = data.filter((plant) => {
    if (changeTab === "All Plants") return true;
    if (changeTab === "New Arrivals") return true;
    if (changeTab === "Sale") return true;
    return false;
  });

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
    startIndex + itemsPerPage,
  );

  return (
    <div className="mb-5 w-full">
      <div className="mb-20 grid grid-cols-3 gap-10 bg-[#FBFBFB]">
        {displayedData.map((flower) => (
          <div
            key={flower.id}
            className="border-[#46A358] p-4 shadow-md hover:border-t-2"
          >
            <div className="mb-8 h-[250px] w-[250px]">
              <img
                className="object-cover"
                src={flower.img}
                alt={`${flower.name} Img`}
              />
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
    </div>
  );
};

export default Data;
