import React, { useContext } from "react";
import { AppProvider } from "../../components/AppContext";

const WishList = () => {
  const { wish, setWish } = useContext(AppProvider);
  return (
    <div>
      {wish.map((wishlist) => {
        <div>{wishlist.name}</div>;
      })}
    </div>
  );
};

export default WishList;
