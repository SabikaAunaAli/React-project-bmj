import React from "react";
import brand1 from "./Images/br-1.png";
import brand2 from "./Images/br-2.png";
import brand3 from "./Images/br-3.png";
import brand4 from "./Images/br-4.png";
import brand5 from "./Images/br-5.png";

const Partners = () => {
  return (
    <div
      className="py-8 mt-24 hidden md:block bg-[#ffffff8d]"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-3 place-items-center opacity-90 cursor-pointer">
          <img src={brand1} alt="brand" className="w-[100px] hover:scale-125" />
          <img src={brand2} alt="brand" className="w-[100px] hover:scale-125" />
          <img src={brand3} alt="brand" className="w-[100px] hover:scale-125" />
          <img src={brand4} alt="brand" className="w-[100px] hover:scale-125" />
          <img src={brand5} alt="brand" className="w-[100px] hover:scale-125" />
        </div>
      </div>
    </div>
  );
};

export default Partners;