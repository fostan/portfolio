import React from "react";

const IconContainer = () => {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container max-w-8xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-auto">
        <img
          src="/images/carbonvert/icon-1.svg"
          alt="Development & construction"
          className="justify-self-center"
          width="100px"
          height="100px"
        />
        <img
          src="/images/carbonvert/icon-2.svg"
          alt="Profit financing"
          className="justify-self-center"
          width="100px"
          height="100px"
        />
        <img
          src="/images/carbonvert/icon-3.svg"
          alt="CO2 storage & sequestration"
          className="justify-self-center"
          width="100px"
          height="100px"
        />
        <img
          src="/images/carbonvert/icon-4.svg"
          alt="Carbon capture"
          className="justify-self-center"
          width="100px"
          height="100px"
        />
        <img
          src="/images/carbonvert/icon-5.svg"
          alt="Identification & design"
          className="justify-self-center"
          width="100px"
          height="100px"
        />
        <img
          src="/images/carbonvert/icon-6.svg"
          alt="Carbon Transport"
          className="justify-self-center"
          width="100px"
          height="100px"
        />
      </div>
    </section>
  );
};

export default IconContainer;
