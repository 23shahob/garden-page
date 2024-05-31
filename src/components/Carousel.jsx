import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImg from "../assets/images/slider_img.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative mx-auto mb-10 h-[450px] max-w-7xl bg-[#F5F5F5]">
      <div className="carousel">
        <Slider {...settings}>
          <div>
            <div className="flex h-[420px] items-center justify-between px-10">
              <div>
                <p className="mb-2 text-sm font-medium text-[#3D3D3D]">
                  WELCOME TO GREENSHOP
                </p>
                <h1 className="mb-1 text-[70px] font-black uppercase leading-[70px] text-[#3D3D3D]">
                  Let’s Make a <br /> Better{" "}
                  <span className="text-[#46A358]">Planet</span>
                </h1>
                <p className="mb-5 text-sm font-normal leading-[24px] text-[#727272]">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create an unique Urban
                  Jungle. Order your favorite plants!
                </p>
                <button className="h-10 w-[140px] rounded-lg bg-[#46A358] font-bold leading-5 text-white outline-none hover:bg-green-500">
                  SHOP NOW
                </button>
              </div>
              <div>
                <img src={SliderImg} alt="Slider Img" />
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="flex h-[420px]">
              <div className="flex h-[420px] items-center px-10">
                <div>
                  <p className="mb-2 text-sm font-medium text-[#3D3D3D]">
                    WELCOME TO GREENSHOP
                  </p>
                  <h1 className="mb-1 text-[70px] font-black uppercase leading-[70px] text-[#3D3D3D]">
                    Let’s Make a <br /> Better{" "}
                    <span className="text-[#46A358]">Planet</span>
                  </h1>
                  <p className="mb-5 w-[36%] text-sm font-normal leading-[24px] text-[#727272]">
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use our plants to create an unique Urban
                    Jungle. Order your favorite plants!
                  </p>
                  <button className="h-10 w-[140px] rounded-lg bg-[#46A358] font-bold leading-5 text-white outline-none hover:bg-green-500">
                    SHOP NOW
                  </button>
                </div>
                <div>
                  <img src={SliderImg} alt="Slider Img" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex h-[420px]">
              <div className="flex h-[420px] items-center px-10">
                <div>
                  <p className="mb-2 text-sm font-medium text-[#3D3D3D]">
                    WELCOME TO GREENSHOP
                  </p>
                  <h1 className="mb-1 text-[70px] font-black uppercase leading-[70px] text-[#3D3D3D]">
                    Let’s Make a <br /> Better{" "}
                    <span className="text-[#46A358]">Planet</span>
                  </h1>
                  <p className="mb-5 w-[36%] text-sm font-normal leading-[24px] text-[#727272]">
                    We are an online plant shop offering a wide range of cheap
                    and trendy plants. Use our plants to create an unique Urban
                    Jungle. Order your favorite plants!
                  </p>
                  <button className="h-10 w-[140px] rounded-lg bg-[#46A358] font-bold leading-5 text-white outline-none hover:bg-green-500">
                    SHOP NOW
                  </button>
                </div>
                <div>
                  <img src={SliderImg} alt="Slider Img" />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
