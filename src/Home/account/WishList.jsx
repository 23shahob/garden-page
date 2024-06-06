import React, { useContext } from "react";
import { AppContext } from "../../components/AppContext";
import { Link } from "react-router-dom";

const WishList = () => {
  const { wish } = useContext(AppContext);
  return (
    <div>
      <h1>Your WishList</h1>
      <div className="max-h-[450px] overflow-y-scroll">
        {wish.map((wishlist) => (
          <div key={wishlist.id} className="flex items-center py-4">
            <div className="flex w-[320px] items-center gap-3">
              <img
                src={wishlist.img}
                alt={wishlist.name}
                className="h-[70px] w-[70px] object-cover"
              />
              <div>
                <p className="mb-[6px] font-medium leading-4 text-[#3D3D3D]">
                  {wishlist.name}
                </p>
                <p className="text-sm font-normal leading-4 text-[#727272]">
                  <span className="text-[#A5A5A5]">SKU:</span> 1995751877966
                </p>
              </div>
            </div>
            <p className="w-[160px] font-medium leading-4 text-[#727272]">
              ${wishlist.price}
            </p>

            <Link to="/">
              <button className="h-10 w-[130px] rounded-lg bg-[#46A358] text-sm font-bold text-white transition duration-300 hover:bg-green-500">
                BUY NOW
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
