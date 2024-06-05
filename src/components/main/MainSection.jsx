import React from "react";
import Carousel from "../Carousel";
import FlowersSection from "./FlowersSection";
import BlogPost from "./BlogPost";
import LogIn from "../header/LogIn";

const MainSection = () => {
  return (
    <div>
      <div>
        {/* <LogIn /> */}
      </div>
      <Carousel />
      <FlowersSection />
      <BlogPost />
    </div>
  );
};

export default MainSection;
