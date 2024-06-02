import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Description = () => {
  const { review, setReview } = useContext(AppContext);
  return (
    <div>
      <div className="mb-5 flex gap-8">
        <span
          className={`cursor-pointer pb-[10px] text-[17px] font-bold leading-4 text-[#3D3D3D] ${
            review === 1 && "border-b-4 border-[#46A358] text-[#46A358]"
          }`}
          onClick={() => {
            setReview(1);
          }}
        >
          Product Description
        </span>
        <span
          className={`cursor-pointer pb-[10px] text-[17px] font-bold leading-4 text-[#3D3D3D] ${
            review === 1 ? "" : "border-b-4 border-[#46A358] text-[#46A358]"
          }`}
          onClick={() => {
            setReview(2);
          }}
        >
          Reviews (19)
        </span>
      </div>
      <div className="mb-20">
        {review === 1 ? (
          <div>
            <p className="mb-3 text-sm font-normal leading-6 text-[#727272]">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam fringilla augue nec est tristique auctor. Donec non est at
              libero vulputate rutrum. Morbi ornare lectus quis justo gravida
              semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit
              id nulla. <br /> <br />
              Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
              feugiat sem, quis fermentum turpis eros eget velit. Donec ac
              tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
              eget sagittis vulputate, sapien libero hendrerit est, sed commodo
              augue nisi non neque. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus
              nisi posuere nisl, in accumsan elit odio quis mi. Cras neque
              metus, consequat et blandit et, luctus a nunc. Etiam gravida
              vehicula tellus, in imperdiet ligula euismod eget. The ceramic
              cylinder planters come with a wooden stand to help elevate your
              plants off the ground.
            </p>
            <h3 className="mb-1 font-bold text-[#3D3D3D]">Living Room</h3>
            <p className="mb-3 text-sm font-normal leading-6 text-[#727272]">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h3 className="mb-1 font-bold text-[#3D3D3D]">Dining Room</h3>
            <p className="mb-3 text-sm font-normal leading-6 text-[#727272]">
              The benefits of houseplants are endless. In addition to cleaning
              the air of harmful toxins, they can help to improve your mood,
              reduce stress and provide you with better sleep. Fill every room
              of your home with houseplants and their restorative qualities will
              improve your life.
            </p>
            <h3 className="mb-1 font-bold text-[#3D3D3D]">Office:</h3>
            <p className="mb-3 text-sm font-normal leading-6 text-[#727272]">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ) : (
          <div>
            <p className="mb-3 text-sm font-normal leading-6 text-[#727272]">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="mb-3 text-sm font-normal leading-6 text-[#727272]">
              The benefits of houseplants are endless. In addition to cleaning
              the air of harmful toxins, they can help to improve your mood,
              reduce stress and provide you with better sleep. Fill every room
              of your home with houseplants and their restorative qualities will
              improve your life.
            </p>
            <p className="mb-3 text-sm font-normal leading-6 text-[#727272]">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;
