import React from "react";
import SummerCactus from "../../assets/images/summer.png";
import StylingTrends from "../../assets/images/styling.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { BLOGPOSTS } from "../data/API";
import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <div className="mx-auto mb-24 max-w-7xl">
      <div className="mb-32 flex h-[300px] gap-7">
        <div className="flex w-[50%] items-center bg-[#FBFBFB] p-7">
          <div>
            <img src={SummerCactus} alt="Summer Cactus Img" />
          </div>
          <div>
            <h1 className="mb-2 text-end text-xl font-black uppercase text-[#3D3D3D]">
              Summer cactus <br /> & Succulents
            </h1>
            <p className="mb-4 text-end text-sm font-normal leading-6 text-[#727272]">
              We are an online plant shop offering a wide <br /> range of cheap
              and trendy plants
            </p>
            <div className="flex justify-end">
              <button className="flex h-10 w-[140px] items-center justify-center gap-1 rounded-lg bg-[#46A358] font-medium leading-5 text-white outline-none hover:bg-green-500">
                Find More <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-[50%] items-center bg-[#FBFBFB] p-7">
          <div>
            <img src={StylingTrends} alt="Styling Trends Img" />
          </div>
          <div>
            <h1 className="mb-2 text-end text-xl font-black uppercase text-[#3D3D3D]">
              Styling trends <br /> & Much more
            </h1>
            <p className="mb-4 text-end text-sm font-normal leading-6 text-[#727272]">
              We are an online plant shop offering a wide <br /> range of cheap
              and trendy plants
            </p>
            <div className="flex justify-end">
              <button className="flex h-10 w-[140px] items-center justify-center gap-1 rounded-lg bg-[#46A358] font-medium leading-5 text-white outline-none hover:bg-green-500">
                Find More <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-3">
          <h1 className="mb-2 text-center text-3xl font-bold leading-4 text-[#3D3D3D]">
            Our Blog Posts
          </h1>
          <p className="text-center text-sm font-normal leading-6 text-[#727272]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
        </div>
        <div className="grid grid-cols-4 gap-11">
          {BLOGPOSTS.map((info) => (
            <div key={info.id} className="w-[268px] bg-[#FBFBFB] ">
              <div>
                <img className="object-cover" src={info.img} alt="" />
              </div>
              <div className="px-3 py-2">
                <p className="mb-1 text-sm font-medium leading-4 text-[#46A358]">
                  {info.date}
                </p>
                <h1 className="mb-1 text-xl font-bold leading-[26px] text-[#3D3D3D]">
                  {info.name}
                </h1>
                <p className="mb-4 text-sm font-normal leading-[22px] text-[#727272]">
                  {info.desc}
                </p>
                <Link to="/blogs">
                  <button className="flex items-center gap-1 text-sm font-medium leading-4 text-[#3D3D3D]">
                    Read More <FaArrowRightLong />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
