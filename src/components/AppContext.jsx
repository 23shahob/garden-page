import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [selectedSize, setSelectedSize] = useState("S");
  const [review, setReview] = useState(1);
  const [basket, setBasket] = useState([]);
  const [count, setCount] = useState({});
  const [basketCount, setBasketCount] = useState(0);
  const [click, setClick] = useState(true);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState("");
  const [date, setDate] = useState(new Date());
  const [order, setOrder] = useState(false);
  const [selectedTab, setSelectedTab] = useState(1);

  useEffect(() => {
    const totalCount = basket.reduce(
      (total, item) => total + (item.quantity || 1),
      0,
    );
    setBasketCount(totalCount);
  }, [basket]);

  const addToCart = (item) => {
    if (cart.length === 0) {
      setCart([item]);
    } else {
      setCart([item]);
    }
  };

  const addToBasket = (product) => {
    setBasket((prevBasket) => {
      const existingProduct = prevBasket.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevBasket.map((basketItem) =>
          basketItem.id === product.id
            ? { ...basketItem, quantity: (basketItem.quantity || 1) + 1 }
            : basketItem,
        );
      } else {
        return [...prevBasket, { ...product, quantity: 1 }];
      }
    });
  };

  const handleCountPlus = (productId) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleCountMinus = (productId) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const handleSize = (size) => {
    setSelectedSize(size);
  };

  const getCount = (productId) => {
    const product = basket.find((item) => item.id === productId);
    return product ? product.quantity : 1;
  };

  const removeFromBasket = (productId) => {
    setBasket((prevBasket) =>
      prevBasket.filter((product) => product.id !== productId),
    );
    setCount((prevCount) => {
      const updatedCount = { ...prevCount };
      delete updatedCount[productId];
      return updatedCount;
    });
  };
  const handleOption = (event) => {
    setFilterData(event.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        selectedSize,
        handleSize,
        review,
        setReview,
        addToBasket,
        basket,
        handleCountMinus,
        handleCountPlus,
        getCount,
        removeFromBasket,
        basketCount,
        click,
        setClick,
        search,
        setSearch,
        filterData,
        setFilterData,
        handleOption,
        date,
        order,
        setOrder,
        selectedTab,
        setSelectedTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
