import React from "react";
import Carousel from "../Carousel";
import FlowersSection from "./FlowersSection";
import BlogPost from "./BlogPost";

const MainSection = () => {
  return (
    <div>
      <Carousel />
      <FlowersSection />
      <BlogPost />
    </div>
  );
};

export default MainSection;
