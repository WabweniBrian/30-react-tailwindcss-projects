import React from "react";

const Banner = () => {
  return (
    <div className="pt-40 md:pt-16 max-w-[500px] mx-auto w-[95%] mt-10 text-center relative">
      <h1 className="text-4xl text-slate-800">
        Shop all your favorite products at{" "}
        <span className="text-yellow-500">Shopwb</span>
      </h1>
      <p className="text-14 text-muted">
        We deliver all the quality products across any location at friendly
        prices and massive discounts.
      </p>
      <img
        src="/images/products/DrawKit-onlineshopping-Illustration-08.svg"
        alt=""
        className="w-full h-[200px]"
      />
    </div>
  );
};

export default Banner;
