import React from "react";

const BeforeAfter = ({ images }) => {
  const { beforeScreens, afterScreens } = images;
  return (
    <section className="py-20 relative">
      <div className="w-4 h-1/2 hidden md:block bg-[#AD3F31] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="container mx-auto max-w-7xl grid md:grid-cols-2 md:gap-32">
        <div className="flex flex-col items-center">
          <span className="lg:text-gray-800 text-5xl lg:text-7xl font-serif font-black  mb-4">
            Before
          </span>
          <img src={beforeScreens} className="w-full" alt="" />
        </div>
        <div className="md:hidden h-4  w-2/3 my-20 mx-auto bg-[#AD3F31]" />
        <div className="flex flex-col items-center md:mt-40">
          <span className="text-gray-800 text-5xl lg:text-7xl font-serif font-black mb-4">
            After
          </span>
          <img src={afterScreens} className="w-full" alt="" />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
