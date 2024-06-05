import React, { useContext, useState } from "react";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa";
import { AppContext } from "../components/AppContext";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Money from "../assets/images/money.png";
import ThankYou from "../assets/images/thank.svg";
import { IoMdClose } from "react-icons/io";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    streetAddress: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    orderNotes: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.country) errors.country = "Country is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.streetAddress)
      errors.streetAddress = "Street address is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.zip) errors.zip = "Zip is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone) errors.phone = "Phone number is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form is valid");
    } else {
      console.log("Form is invalid");
    }
  };
  const { basket, getCount, click, setClick, date, order, setOrder } =
    useContext(AppContext);

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

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
    <div className="bgBlur mx-auto max-w-7xl pt-20">
      <div className="my-5 h-12">
        <div role="presentation" onClick={(e) => e.preventDefault()}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              className="font-semibold text-[#3D3D3D]"
              to="/"
            >
              Home
            </Link>
            <Link
              underline="hover"
              className="font-semibold text-[#3D3D3D]"
              to="/shop"
            >
              Shop
            </Link>
            <Link
              underline="hover"
              className="font-semibold text-[#3D3D3D]"
              to="/shop/cart"
            >
              Shopping Cart
            </Link>
            <Link underline="hover" aria-current="page" color="inherit">
              Checkout
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mb-40 flex justify-between">
        <div className="w-[60%]">
          <h1 className="mb-5 text-[17px] font-bold leading-4 text-[#3D3D3D]">
            Billing Address
          </h1>
          <div className="mb-7 flex gap-5">
            <div className="w-1/2">
              <label className="mb-[10px] flex gap-1 text-[15px] font-normal leading-[15px] text-[#3D3D3D]">
                First Name <FaStarOfLife className="h-3 w-3 text-[#F03800]" />
              </label>
              <input
                className={`h-10 w-full rounded border ${errors.firstName ? "border-red-500" : "border-gray-300"} px-3 outline-none focus:ring-2 focus:ring-blue-400`}
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="text-xs text-red-500">{errors.firstName}</p>
              )}
            </div>
            <div className="w-1/2">
              <label className="mb-[10px] flex gap-1 text-[15px] font-normal leading-[15px] text-[#3D3D3D]">
                Last Name <FaStarOfLife className="h-3 w-3 text-[#F03800]" />
              </label>
              <input
                className={`h-10 w-full rounded border ${errors.lastName ? "border-red-500" : "border-gray-300"} px-3 outline-none focus:ring-2 focus:ring-blue-400`}
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="text-xs text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="mb-7 flex gap-5">
            <div className="w-1/2">
              <label className="mb-[10px] flex gap-2 text-[15px] font-normal leading-[15px] text-[#3D3D3D]">
                Country / Region
                <FaStarOfLife className="h-3 w-3 text-[#F03800]" />
              </label>
              <select
                className={`leadiing-[15px] h-10 w-full rounded border ${errors.country ? "border-red-500" : "border-gray-300"} px-2 text-sm font-normal text-[#A5A5A5] outline-none focus:ring-2 focus:ring-blue-400`}
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option hidden>Select a country / region</option>
                <option>Tashkent</option>
                <option>Samarkand</option>
                <option>Bukhara</option>
              </select>
              {errors.country && (
                <p className="text-xs text-red-500">{errors.country}</p>
              )}
            </div>
            <div className="w-1/2">
              <label className="mb-[10px] flex gap-2 text-[15px] font-normal leading-[15px] text-[#3D3D3D]">
                Town / City
                <FaStarOfLife className="h-3 w-3 text-[#F03800]" />
              </label>
              <input
                className={`h-10 w-full rounded border ${errors.city ? "border-red-500" : "border-gray-300"} px-3 outline-none focus:ring-2 focus:ring-blue-400`}
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && (
                <p className="text-xs text-red-500">{errors.city}</p>
              )}
            </div>
          </div>
          <div className="mb-7 gap-5">
            <label className="mb-[10px] flex text-[15px] font-normal leading-[15px] text-[#3D3D3D]">
              Street Address
              <FaStarOfLife className="h-3 w-3 text-[#F03800]" />
            </label>
            <div className="flex gap-5">
              <input
                placeholder="House number and street name"
                className={`h-10 w-1/2 rounded border ${errors.streetAddress ? "border-red-500" : "border-gray-300"} px-3 outline-none placeholder:text-sm placeholder:font-normal placeholder:leading-[15px] placeholder:text-[#A5A5A5] focus:ring-2 focus:ring-blue-400`}
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
              />
              <input
                placeholder="Apartment, suite, unit, etc. (optional)"
                className={`h-10 w-1/2 rounded border border-gray-300 px-3 outline-none placeholder:text-sm placeholder:font-normal placeholder:leading-[15px] placeholder:text-[#A5A5A5] focus:ring-2 focus:ring-blue-400`}
                type="text"
                name="apartment"
                value={formData.apartment}
                onChange={handleChange}
              />
            </div>
            {errors.streetAddress && (
              <p className="text-xs text-red-500">{errors.streetAddress}</p>
            )}
          </div>
          <div className="mb-7 flex gap-5">
            <div className="w-1/2">
              <label className="mb-[10px] flex gap-2 text-[15px] font-normal leading-[15px] text-[#3D3D3D]">
                State
                <FaStarOfLife className="h-3 w-3 text-[#F03800]" />
              </label>
              <select
                className={`leadiing-[15px] h-10 w-full rounded border ${errors.state ? "border-red-500" : "border-gray-300"} px-2 text-sm font-normal text-[#A5A5A5] outline-none focus:ring-2 focus:ring-blue-400`}
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option hidden>Select a state</option>
                <option>Uzbekistan</option>
                <option>Korea</option>
                <option>China</option>
              </select>
              {errors.state && (
                <p className="text-xs text-red-500">{errors.state}</p>
              )}
            </div>
            <div className="w-1/2">
              <label className="mb-[10px] flex gap-2 text-[15px] font-normal leading-[15px] text-[#3D3D3D]">
                Zip
                <FaStarOfLife className="h-3 w-3 text-[#F03800]" />
              </label>
              <input
                className={`h-10 w-full rounded border ${errors.zip ? "border-red-500" : "border-gray-300"} px-3 outline-none focus:ring-2 focus:ring-blue-400`}
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
              />
              {errors.zip && (
                <p className="text-xs text-red-500">{errors.zip}</p>
              )}
            </div>
          </div>
          <div className="mb-8 flex gap-5">
            <div className="w-1/2">
              <label className="mb-[10px] flex text-[15px] font-normal leading-[15px] text-[#3D3D3D]">
                Email address
                <FaStarOfLife className="h-3 w-3 text-[#F03800]" />
              </label>
              <input
                className={`h-10 w-full rounded border ${errors.email ? "border-red-500" : "border-gray-300"} px-3 outline-none focus:ring-2 focus:ring-blue-400`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="w-1/2">
              <label className="mb-[10px] flex text-[15px] font-normal leading-[15px] text-[#3D3D3D]">
                Phone Number
                <FaStarOfLife className="h-3 w-3 text-[#F03800]" />
              </label>
              <div className="flex gap-2">
                <select
                  className={`leadiing-[15px] h-10 w-1/4 rounded border ${errors.phone ? "border-red-500" : "border-gray-300"} px-2 text-sm font-normal outline-none focus:ring-2 focus:ring-blue-400`}
                  name="phonePrefix"
                  value={formData.phonePrefix}
                  onChange={handleChange}
                >
                  <option hidden>+996</option>
                  <option>+998</option>
                  <option>+44</option>
                  <option>+34</option>
                </select>
                <input
                  className={`h-10 w-full rounded border ${errors.phone ? "border-red-500" : "border-gray-300"} px-3 outline-none focus:ring-2 focus:ring-blue-400`}
                  type="text"
                  pattern="[0-9]{9}"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mb-12 flex items-center gap-2">
            <input className="h-4 w-4 outline-none" type="radio" />
            <p className="text-[15px] font-medium leading-4 text-[#3D3D3D]">
              Ship to a different address?
            </p>
          </div>
          <div className="w-1/2">
            <p className="mb-2 text-[15px] font-normal leading-[15px] text-[#3D3D3D]">
              Order notes (optional)
            </p>
            <div className="flex max-h-[150px] flex-col rounded-sm border border-gray-200">
              <textarea
                className="h-full w-full rounded-sm text-sm outline-none focus:ring-2 focus:ring-blue-400"
                name="orderNotes"
                value={formData.orderNotes}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="w-[35%]">
          <h1 className="mb-5 text-left text-[17px] font-bold leading-4 text-[#3D3D3D]">
            Your Order
          </h1>
          <div className="flex justify-between border-b border-green-200 pb-3">
            <p className="text-left font-medium leading-4 text-[#3D3D3D]">
              Products
            </p>
            <p className="text-left font-medium leading-4 text-[#3D3D3D]">
              Subtotal
            </p>
          </div>
          <div>
            <div className="mb-4 flex max-h-[400px] overflow-y-scroll flex-col gap-y-2">
              {basket.map((product) => (
                <div
                  key={product.id}
                  className="flex h-[70px] items-center justify-between rounded bg-[#FBFBFB] py-4 pr-3"
                >
                  <div className="flex items-center gap-3">
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
                  <div className="flex gap-3">
                    <p className="text-sm font-normal leading-4 text-[#727272]">
                      (x {getCount(product.id)})
                    </p>
                  </div>
                  <p className="text-lg font-bold leading-4 text-[#46A358]">
                    ${product.price * getCount(product.id)}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full">
              {click ? (
                <p className="mb-5 text-right text-sm font-medium leading-4 text-[#3D3D3D]">
                  Have a coupon code?{" "}
                  <span
                    onClick={() => {
                      setClick(false);
                    }}
                    className="cursor-pointer text-[#46A358]"
                  >
                    Click here
                  </span>
                </p>
              ) : (
                <form className="mb-7 flex h-10 items-center rounded-md border-2 border-[#46A358]">
                  <input
                    className="h-full w-full rounded-md px-2 outline-none placeholder:text-sm placeholder:font-normal placeholder:leading-[15px] placeholder:text-[#A5A5A5]"
                    type="text"
                    placeholder="Enter coupon code here..."
                  />
                  <button className="h-full w-[102px] bg-[#46A358] text-[15px] font-bold leading-4 text-white">
                    Apply
                  </button>
                </form>
              )}

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
              <p className="mb-4 border-b border-green-200 pb-4 text-end text-[12px] font-normal leading-4 text-[#46A358]">
                View shipping charge
              </p>
              <div className="mb-12 flex justify-between">
                <p className="font-bold leading-4 text-[#3D3D3D]">Total</p>
                <p className="text-lg font-bold leading-4 text-[#46A358]">
                  ${total.toFixed(2)}
                </p>
              </div>
              <div className="mb-12">
                <FormControl className="w-full">
                  <p className="mb-5 text-[17px] font-bold leading-4 text-[#3D3D3D]">
                    Payment Method
                  </p>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      className="mb-4 h-[45px] rounded-md border border-gray-300"
                      value="female"
                      control={<Radio />}
                      label={<img className="" src={Money} alt="Money Img" />}
                    />
                    <FormControlLabel
                      className="mb-4 h-[45px] rounded-md border border-gray-300 text-[15px] font-normal leading-4 text-[#3D3D3D]"
                      value="male"
                      control={<Radio />}
                      label="Dorect bank transfer"
                    />
                    <FormControlLabel
                      className="h-[45px] rounded-md border border-gray-300 text-[15px] font-normal leading-4 text-[#3D3D3D]"
                      value="other"
                      control={<Radio />}
                      label="Cash on delivery"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              {basket.length > 0 ? (
                <button
                  onClick={() => {
                    basket.length > 0 ? setOrder(true) : "";
                  }}
                  type="submit"
                  className="mb-3 h-10 w-full rounded-md bg-[#46A358] text-[15px] font-bold leading-4 text-white outline-none transition duration-300 hover:bg-green-500"
                >
                  Place Order
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {order && (
          <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
            {" "}
            <div className="h-screen w-[578px] overflow-y-scroll bg-white shadow-2xl">
              <div className="relative flex h-[156px] flex-col items-center justify-center border-b border-green-200 bg-green-50 pt-7">
                <img
                  className="mb-4 h-20 w-16"
                  src={ThankYou}
                  alt="Order Thanks"
                />
                <p className="mb-4 font-normal leading-4 text-[#727272]">
                  Your order has been received
                </p>
                <button
                  onClick={() => {
                    setOrder(false);
                  }}
                  className="absolute right-4 top-4 h-4 w-4"
                >
                  <IoMdClose className="text-[#46A358]" />
                </button>
              </div>
              <div className="border-b-[10px] border-[#46A358] px-10">
                <ul className="flex justify-between border-b border-green-200 py-4">
                  <li>
                    <p className="mb-1 text-sm font-normal leading-4 text-[#727272]">
                      Order Number
                    </p>
                    <p className="text-[15px] font-bold leading-4 text-[#727272]">
                      19586687
                    </p>
                  </li>
                  <hr className="h-8 w-[1px] border-none bg-green-200" />
                  <li>
                    <p className="mb-1 text-sm font-normal leading-4 text-[#727272]">
                      Date
                    </p>
                    <p className="text-[15px] font-bold leading-4 text-[#727272]">
                      {date.toDateString()}
                    </p>
                  </li>
                  <hr className="h-8 w-[1px] border-none bg-green-200" />
                  <li>
                    <p className="mb-1 text-sm font-normal leading-4 text-[#727272]">
                      Total
                    </p>
                    <p className="text-[15px] font-bold leading-4 text-[#727272]">
                      ${total.toFixed(2)}
                    </p>
                  </li>
                  <hr className="h-8 w-[1px] border-none bg-green-200" />
                  <li>
                    <p className="mb-1 text-sm font-normal leading-4 text-[#727272]">
                      Payment Method
                    </p>
                    <p className="text-[15px] font-bold leading-4 text-[#727272]">
                      Cash on delivery
                    </p>
                  </li>
                </ul>
                <div className="pt-4">
                  <h1 className="mb-5 text-left text-[17px] font-bold leading-4 text-[#3D3D3D]">
                    Order Details
                  </h1>
                  <div className="flex justify-between border-b border-green-200 pb-3">
                    <p className="w-[225px] text-left font-medium leading-4 text-[#3D3D3D]">
                      Products
                    </p>
                    <p className="text-left font-medium leading-4 text-[#3D3D3D]">
                      Qty
                    </p>
                    <p className="text-left font-medium leading-4 text-[#3D3D3D]">
                      Subtotal
                    </p>
                  </div>
                  <div>
                    <div className="mb-5 flex max-h-[300px] flex-col gap-y-2 overflow-y-scroll">
                      {basket.map((product) => (
                        <div
                          key={product.id}
                          className="flex h-[70px] items-center justify-between rounded bg-[#FBFBFB] py-4 pr-3"
                        >
                          <div className="flex items-center gap-3">
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
                          <div className="flex gap-3">
                            <p className="text-sm font-normal leading-4 text-[#727272]">
                              (x {getCount(product.id)})
                            </p>
                          </div>
                          <p className="text-lg font-bold leading-4 text-[#46A358]">
                            ${product.price * getCount(product.id)}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mb-4 w-full border-b border-green-200">
                      <div className="mb-6 flex justify-between">
                        <p className="text-[15px] font-normal leading-4 text-[#3D3D3D]">
                          Shipping
                        </p>
                        <p className="text-lg font-medium leading-4 text-[#3D3D3D]">
                          ${shipping.toFixed(2)}
                        </p>
                      </div>

                      <div className="mb-5 flex justify-between">
                        <p className="font-bold leading-4 text-[#3D3D3D]">
                          Total
                        </p>
                        <p className="text-lg font-bold leading-4 text-[#46A358]">
                          ${total.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <p className="mb-12 text-center text-sm font-normal leading-[22px] text-[#727272]">
                      Your order is currently being processed. You will receive
                      an order confirmation email shortly with the expected
                      delivery date for your items.
                    </p>
                    <button className="mx-auto mb-12 flex h-[45px] w-[162px] items-center justify-center rounded-md bg-[#46A358] font-bold leading-4 text-white outline-none hover:bg-green-500">
                      Track your order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Checkout;
