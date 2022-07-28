import React from "react";
import banner from "../../assets/images/chair.png"
import bgImage from "../../assets/images/bg.png"
import PrimaryBtn from "../Shared/PrimaryBtn";

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: `url(${bgImage})`}}>
      <div className="hero-content px-10 flex-col lg:flex-row-reverse" >
        <img
          src={banner}
          className="max-w-md rounded lg:none shadow-sm"
        />
        <div>
          <h1 className="text-4xl font-bold w-96 text-gray-500">Your New Smile Start Here</h1>
          <p className="py-4 text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsum animi neque harum rem porro doloremque
          </p>
          <PrimaryBtn>get started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Banner;
