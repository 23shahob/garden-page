import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { AppContext } from "../../components/AppContext";

const Orders = () => {
  const {
    basket,
    handleCountPlus,
    handleCountMinus,
    getCount,
    removeFromBasket,
  } = useContext(AppContext);

  const calculateSubtotal = () => {
    return basket.reduce(
      (total, product) => total + product.price * getCount(product.id),
      0,
    );
  };

  const subtotal = calculateSubtotal();
  const shipping = 16.0;
  const total = subtotal + shipping;

  return (
    <div>
      <div className="mb-20 flex gap-20">
        <div className="w-[60%]">
          <div className="flex border-b border-green-200 pb-3">
            <p className="w-[310px] font-medium leading-4 text-[#3D3D3D]">
              Products
            </p>
            <p className="w-[145px] font-medium leading-4 text-[#3D3D3D]">
              Price
            </p>
            <p className="w-[163px] font-medium leading-4 text-[#3D3D3D]">
              Quantity
            </p>
            <p className="w-[160px] font-medium leading-4 text-[#3D3D3D]">
              Total
            </p>
          </div>
          <div>
            {basket.length === 0 ? (
              <div className="flex h-96 items-center justify-center">
                <h1 className="text-5xl font-semibold text-[#46A358]">
                  No items in the cart.
                </h1>
              </div>
            ) : (
              <div>
                {basket.map((product) => (
                  <div key={product.id} className="flex items-center py-4">
                    <div className="flex w-[310px] items-center gap-3">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="h-[70px] w-[70px] object-cover"
                      />
                      <div>
                        <p className="mb-[6px] font-medium leading-4 text-[#3D3D3D]">
                          {product.name}
                        </p>
                        <p className="text-sm font-normal leading-4 text-[#727272]">
                          <span className="text-[#A5A5A5]">SKU:</span>{" "}
                          1995751877966
                        </p>
                      </div>
                    </div>
                    <p className="w-[145px] font-medium leading-4 text-[#727272]">
                      ${product.price}
                    </p>
                    <div className="flex w-[163px] gap-3">
                      <button
                        onClick={() => handleCountMinus(product.id)}
                        className="h-[25px] w-[25px] rounded-full bg-[#46A358] text-white"
                      >
                        -
                      </button>
                      <p className=" font-medium text-[#3D3D3D]">
                        {getCount(product.id)}
                      </p>
                      <button
                        onClick={() => handleCountPlus(product.id)}
                        className="h-[25px] w-[25px] rounded-full bg-[#46A358] text-white"
                      >
                        +
                      </button>
                    </div>
                    <p className="w-[130px] font-bold leading-4 text-[#46A358]">
                      ${product.price * getCount(product.id)}
                    </p>
                    <button
                      onClick={() => removeFromBasket(product.id)}
                      className="h-6 w-6"
                    >
                      <MdDeleteOutline className="h-full w-full text-[#727272]" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="w-full">
          <h1 className="mb-3 border-b border-green-200 pb-3 text-lg font-bold leading-4 text-[#3D3D3D]">
            Cart Totals
          </h1>
          <p className="mb-2 text-sm font-normal leading-4 text-[#3D3D3D]">
            Coupon Apply
          </p>
          <form className="mb-7 flex h-10 items-center rounded-md border-2 border-[#46A358]">
            <input
              className="h-full w-full rounded-md px-2 outline-none placeholder:text-sm placeholder:font-normal placeholder:leading-[15px] placeholder:text-[#A5A5A5]"
              type="text"
              placeholder="Enter coupon code here..."
            />
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="h-full w-[102px] bg-[#46A358] text-[15px] font-bold leading-4 text-white"
            >
              Apply
            </button>
          </form>
          <div className="mb-4 flex justify-between">
            <p className="text-[15px] font-normal leading-4 text-[#3D3D3D]">
              Subtotal
            </p>
            <p className="text-lg font-medium leading-4 text-[#3D3D3D]">
              ${subtotal.toFixed(2)}
            </p>
          </div>
          <div className="mb-5 flex justify-between">
            <p className="text-[15px] font-normal leading-4 text-[#3D3D3D]">
              Coupon Discount
            </p>
            <p className="text-lg font-normal leading-4 text-[#3D3D3D]">
              (-) 00.00
            </p>
          </div>
          <div className="mb-2 flex justify-between">
            <p className="text-[15px] font-normal leading-4 text-[#3D3D3D]">
              Shipping
            </p>
            <p className="text-lg font-medium leading-4 text-[#3D3D3D]">
              ${shipping.toFixed(2)}
            </p>
          </div>
          <p className="mb-6 text-end text-[12px] font-normal leading-4 text-[#46A358]">
            View shipping charge
          </p>
          <div className="mb-7 flex justify-between">
            <p className="font-bold leading-4 text-[#3D3D3D]">Total</p>
            <p className="text-lg font-bold leading-4 text-[#46A358]">
              ${total.toFixed(2)}
            </p>
          </div>
          {basket.length ? (
            <Link to="/shop/checkout">
              <button className="mb-3 h-10 w-full rounded-md bg-[#46A358] text-[15px] font-bold leading-4 text-white outline-none transition duration-300 hover:bg-green-500">
                Proceed To Checkout
              </button>
            </Link>
          ) : (
            ""
          )}
          <button className="mx-auto flex bg-transparent text-[15px] leading-4 text-[#46A358] outline-none">
            <Link to="/"> Continue Shopping</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
