import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="w-full h-[46rem]">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1621536906072-4d081e10e48d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="text-white w-full top-[43%] text-center absolute z-20">
          <h1 className="text-thin">MORE FLAVOURS FOR LESS</h1>
          <h1 className="text-[7rem]">Taste The Difference</h1>
          <p>
            When the going gets tough, the tough get grilling, bringing heat{" "}
            <br /> to your meat. No one can compete with our meat
          </p>
        </div>
      </div>
      <div className="w-full px-[5rem] flex items-center gap-[2rem]">
        <div className="w-[45%] h-[30rem]">
          <img
            className="w-full h-full object-cover aspect-square"
            src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>

        <div className="w-[50%] flex flex-col gap-[2rem]">
          <p>YOUR SPECIAL OCCASION DESTINATION</p>
          <h1 className="text-[#BD9A4B] text-[3rem] leading-[4rem] w-[40.2rem]">
            The wilma is a premium taste that yearns to be savoured,ground beef
            between your teeth.
          </h1>
        </div>
      </div>

      <div className="w-full flex items-center gap-[2rem] px-[4rem]">
        <div className="w-[50%] text-center flex flex-col gap-[2rem]">
          <h1 className="text-thin">Delight in every bite</h1>
          <h1 className="font-semibold text-[5rem] leading-[4rem]">Our chef recommended</h1>
          <p className="font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            voluptates earum facilis vel illum itaque autem deleniti
            perspiciatis. Exercitationem, aspernatur.
          </p>
          <NavLink to="/recipes" className="border-b border-t border-[#BD9A4B] w-fit mx-auto px-[3rem] py-[0.8rem]">Our Menus</NavLink>
        </div>
        <div className="w-[50%] h-[30rem]">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;
