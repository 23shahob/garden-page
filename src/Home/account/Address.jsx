import React, { useState } from "react";
import { FaStarOfLife } from "react-icons/fa6";

const Address = () => {
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

  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <h1 className="mb-2 text-[17px] font-bold leading-4 text-[#3D3D3D]">
          Billing Address
        </h1>
        <p className="mb-8 text-sm font-normal leading-[15px] text-[#727272]">
          The following addresses will be used on the checkout page by default.
        </p>
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
            {errors.zip && <p className="text-xs text-red-500">{errors.zip}</p>}
          </div>
        </div>
        <div className="mb-12 flex gap-5">
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
        <button className="mb-16 h-10 w-[130px] rounded bg-[#46A358] text-white hover:bg-green-500">
          Save Address
        </button>
        <div className="mb-20 flex justify-between">
          <div>
            <h3 className="mb-3 text-[17px] font-medium leading-4 text-[#3D3D3D]">
              Shipping Address
            </h3>
            <p className="text-sm font-normal leading-[15px] text-[#727272]">
              You have not set up this type of address yet.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <input className="h-4 w-4" type="radio" />
            <p className="pr-16 text-sm font-normal leading-4 text-[#3D3D3D]">
              Same as billing address
            </p>
            <button className="font-medium leading-4 text-[#46A358] outline-none">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Address;
