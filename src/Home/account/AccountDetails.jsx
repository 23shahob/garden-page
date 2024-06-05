import React, { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { IoEyeOffOutline } from "react-icons/io5";

const AccountDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
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
    if (!formData.password) errors.password = "Password is required";
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
      <h3 className="mb-5 font-medium leading-4 text-[#3D3D3D]">
        Personal Information
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="w-full">
          <div className="mb-7 flex w-full gap-7">
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
          <div className="mb-8 flex gap-7">
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
          <div className="mb-9 flex items-center gap-7">
            <div className="w-1/2">
              <label className="mb-[10px] flex text-[15px] font-normal leading-[15px] text-[#3D3D3D]">
                Username
                <FaStarOfLife className="h-3 w-3 text-[#F03800]" />
              </label>
              <input
                className={`h-10 w-full rounded border ${errors.firstName ? "border-red-500" : "border-gray-300"} px-3 outline-none focus:ring-2 focus:ring-blue-400`}
                type="text"
                name="text"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="w-1/2">
              <label className="mb-[10px] flex text-[15px] font-normal leading-[15px] text-[#3D3D3D]">
                Photo
              </label>
              <div className="flex h-[50px] items-center gap-6">
                <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border border-gray-300">
                  <CiImageOn className="h-6 w-6 text-[#46A358]" />
                </div>
                <button className="h-10 w-[98px] rounded bg-[#46A358] text-sm font-bold leading-4 text-white outline-none">
                  Change
                </button>
                <button className="h-10 w-[98px] rounded text-sm font-normal leading-4 text-[#3D3D3D] outline-none hover:bg-[#46A358] hover:font-bold hover:text-white">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-5 font-medium leading-4 text-[#3D3D3D]">
              Password change
            </p>
            <div className="flex gap-7">
              <div className="w-1/2">
                <div className="mb-8">
                  <label className="mb-[10px] flex gap-1 text-[15px] font-normal leading-[15px] text-[#3D3D3D]">
                    Current password
                  </label>
                  <div className="relative">
                    <input
                      className={`h-10 w-full rounded border ${errors.password ? "border-red-500" : "border-gray-300"} px-3 outline-none focus:ring-2 focus:ring-blue-400`}
                      type="password"
                      name="firstName"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <IoEyeOffOutline className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
                  </div>
                  {errors.password && (
                    <p className="text-xs text-red-500">{errors.password}</p>
                  )}
                </div>
                <div className="mb-8">
                  <label className="mb-[10px] flex gap-1 text-[15px] font-normal leading-[15px] text-[#3D3D3D]">
                    New password
                  </label>
                  <div className="relative">
                    <input
                      className={`h-10 w-full rounded border ${errors.password ? "border-red-500" : "border-gray-300"} px-3 outline-none focus:ring-2 focus:ring-blue-400`}
                      type="password"
                      name="firstName"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <IoEyeOffOutline className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
                  </div>
                  {errors.password && (
                    <p className="text-xs text-red-500">{errors.password}</p>
                  )}
                </div>
                <div className="mb-12">
                  <label className="mb-[10px] flex gap-1 text-[15px] font-normal leading-[15px] text-[#3D3D3D]">
                    Confirm new password
                  </label>
                  <div className="relative">
                    <input
                      className={`h-10 w-full rounded border ${errors.password ? "border-red-500" : "border-gray-300"} px-3 outline-none focus:ring-2 focus:ring-blue-400`}
                      type="password"
                      name="firstName"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <IoEyeOffOutline className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500" />
                  </div>
                  {errors.password && (
                    <p className="text-xs text-red-500">{errors.password}</p>
                  )}
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>
            <button className="mb-20 h-10 w-[130px] rounded bg-[#46A358] text-sm font-bold leading-4 text-white transition duration-300 hover:bg-green-500">
              Save Change
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;
