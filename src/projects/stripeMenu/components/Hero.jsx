import React from "react";
import { useGlobalContext } from "../contexts/context";
import phoneImg from "../images/phone.svg";

const Hero = () => {
  const { dispatch } = useGlobalContext();

  return (
    <section
      className="hero relative overflow-hidden min-h-screen w-full -mt-14  grid before:absolute before:bg-heroBg before:w-full before:h-[85%] before:top-0 before:left-0 before:bg-cover before:bg-no-repeat"
      onMouseOver={() => dispatch({ type: "CLOSE_SUBMENU" })}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 justify-center items-center z-30">
        <article className="hero-info text-center px-10 md:px-0 md:text-left md:col-span-2 md:pl-16">
          <h1 className="text-gradient text-4xl sm:text-6xl lg:text-7xl">
            Payment infrastructure for the internet
          </h1>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            accusantium maiores fuga sit nam voluptatem modi dolores omnis odit
            delectus a asperiores, laudantium pariatur eaque. Neque officiis qui
            ratione reiciendis.
          </p>
          <button className="my-4 text-white px-6 py-1 rounded-full bg-gradient-to-tr from-pink-600 to-purple-600 hover:bg-gradient-to-bl">
            Start Now
          </button>
        </article>
        <article className="hero-images">
          <img
            src={phoneImg}
            alt="phone"
            className="w-[12rem] md:w-[14rem] hidden md:block"
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;
