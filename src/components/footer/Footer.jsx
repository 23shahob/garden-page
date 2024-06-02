import { Link } from "react-router-dom";
import Group20 from "../../assets/images/garden_care.svg";
import Group21 from "../../assets/images/plant_renovation.svg";
import Group22 from "../../assets/images/watering_graden.svg";
import Logo from "../../assets/images/logo.svg";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Union from "../../assets/images/union.svg";
import Money from "../../assets/images/money.png";

const Footer = () => {
  return (
    <div className="mx-auto max-w-7xl bg-[#FBFBFB]">
      <div className="flex h-[250px] items-center justify-between p-6">
        <div className="flex gap-9">
          {" "}
          <div className="w-[204px]">
            <img src={Group20} alt="Recommend Img" />
          </div>
          <hr className="h-[200px] w-[1px] border-none bg-green-200" />
          <div className="w-[204px]">
            <img src={Group21} alt="Recommend Img" />
          </div>
          <hr className="h-[200px] w-[1px] border-none bg-green-100" />
          <div className="w-[204px]">
            <img src={Group22} alt="Recommend Img" />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="mb-4 text-xl font-bold leading-4 text-[#3D3D3D]">
            Would you like to join newsletters?
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="relative mb-4 h-10 w-[354px] rounded-lg bg-white shadow-sm hover:border-blue-600"
          >
            <input
              className="h-full w-[354px] rounded-lg bg-white p-3 text-sm font-normal leading-4 text-gray-700 placeholder-gray-400 outline-none"
              type="email"
              placeholder="enter your email address..."
            />
            <button className="absolute right-0 h-full w-[85px] rounded-r-lg bg-green-600 text-lg font-bold leading-4 text-white outline-none hover:bg-green-500">
              Join
            </button>
          </form>
          <p className="w-[354px] text-sm font-normal leading-[22px] text-[#727272]">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!{" "}
          </p>
        </div>
      </div>
      <div className="flex h-[88px] items-center gap-20 bg-[#EDF6EE] px-6">
        <div>
          <Link to="/">
            <img src={Logo} alt="Site Logo" />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <GrLocation className="text-[#46A358]" />
          <div className="cursor-pointer text-sm font-normal leading-[22px] text-[#3D3D3D]">
            <p>70 West Buckingham Ave.</p>
            <p>Farmingdale, NY 11735</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <HiOutlineMail className="text-[#46A358]" />
          <div className="text-sm font-normal leading-[22px] text-[#3D3D3D]">
            <p className="cursor-pointer">teshayevshahob023@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FiPhoneCall className="text-[#46A358]" />
          <div className="text-sm font-normal leading-[22px] text-[#3D3D3D]">
            <p className="cursor-pointer">+998 94 088 62 68</p>
          </div>
        </div>
      </div>
      <div className="flex h-[240px] items-center justify-between border-b border-green-100 px-6">
        <ul>
          <p className="mb-2 text-xl font-bold leading-4 text-[#3D3D3D]">
            My Account
          </p>
          <li className="text-sm font-normal leading-[30px] hover:text-[#46A358]">
            <Link>My Account</Link>
          </li>
          <li className="text-sm font-normal leading-[30px] hover:text-[#46A358]">
            <Link>Our stores</Link>
          </li>
          <li className="text-sm font-normal leading-[30px] hover:text-[#46A358]">
            <Link>Contact us</Link>
          </li>
          <li className="text-sm font-normal leading-[30px] hover:text-[#46A358]">
            <Link>Career</Link>
          </li>
          <li className="text-sm font-normal leading-[30px] hover:text-[#46A358]">
            <Link>Specials</Link>
          </li>
        </ul>
        <ul>
          <p className="mb-2 text-xl font-bold leading-4 text-[#3D3D3D]">
            Help & Guide
          </p>
          <li className="text-sm font-normal leading-[30px] hover:text-[#46A358]">
            <Link>Help Center</Link>
          </li>
          <li className="text-sm font-normal leading-[30px] hover:text-[#46A358]">
            <Link>How to Buy</Link>
          </li>
          <li className="text-sm font-normal leading-[30px] hover:text-[#46A358]">
            <Link>Shipping & Delivery</Link>
          </li>
          <li className="text-sm font-normal leading-[30px] hover:text-[#46A358]">
            <Link>Product Policy</Link>
          </li>
          <li className="text-sm font-normal leading-[30px] hover:text-[#46A358]">
            <Link>How to Return</Link>
          </li>
        </ul>
        <ul>
          <p className="mb-2 text-xl font-bold leading-4 text-[#3D3D3D]">
            Categories
          </p>
          <li className="text-sm font-normal leading-[30px] hover:text-[#46A358]">
            <Link>House Plants</Link>
          </li>
          <li className="text-sm font-normal leading-[30px] hover:text-[#46A358]">
            <Link>Potter Plants</Link>
          </li>
          <li className="text-sm font-normal leading-[30px] hover:text-[#46A358]">
            <Link>Seeds</Link>
          </li>
          <li className="text-sm font-normal leading-[30px] hover:text-[#46A358]">
            <Link>Small Plants</Link>
          </li>
          <li className="text-sm font-normal leading-[30px] hover:text-[#46A358]">
            <Link>Accessories</Link>
          </li>
        </ul>
        <ul>
          <p className="mb-5 text-xl font-bold leading-4 text-[#3D3D3D]">
            Social Media
          </p>
          <div className="mb-8 flex gap-[10px]">
            <Link
              to="https://facebook.com"
              className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-[#46A358]"
            >
              <FaFacebookF className="text-[#46A358]" />
            </Link>
            <Link
              to="https://instagram.com"
              className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-[#46A358]"
            >
              <FaInstagram className="text-[#46A358]" />
            </Link>
            <Link
              to="https://twitter.com"
              className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-[#46A358]"
            >
              <FaTwitter className="text-[#46A358]" />
            </Link>
            <Link
              to="https://linkedin.com"
              className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-[#46A358]"
            >
              <FaLinkedinIn className="text-[#46A358]" />
            </Link>
            <Link
              to="https://union.com"
              className="flex h-[30px] w-[30px] items-center justify-center rounded-lg border border-[#46A358]"
            >
              <img src={Union} alt="Union Img" />
            </Link>
          </div>
          <p className="mb-3 text-xl font-bold leading-4 text-[#3D3D3D]">
            We accept
          </p>
          <img src={Money} alt="Cash Methods" />
        </ul>
      </div>
      <div className="flex h-12 items-center justify-center bg-white">
        <p className="text-sm font-normal leading-[30px] text-[#3D3D3D]">
          © 2021 GreenShop. All Rights Reserved. Designed by Shahob.
        </p>
      </div>
    </div>
  );
};

export default Footer;
