import React from "react";

const Value = () => {
  return (
    <div className="mb-[4rem]  mt-[6rem]">
      <h1 className="text-[25px] py-[2rem]  pb-[3rem]  font-bold w-[400px]  block">
        The Value get hols us true and account
      </h1>

      <div className=" grid gap-[10rem]  grid-cols-3 items-center">
        <div className=" rounded-[10px]  hover:bg-gray-300 p[1.5rem]">
          <div className="flex  items-center  gap-3">
            <div className="p-[4px]  rounded-[.8rem]  bg-[#dedef8]  h-[40px]  w-[40px]  items-center justify-center">
              <img src="logo.svg" alt="" className="w-[70%]" />
            </div>
            <span className=" font-semibold text-blue-500 text-[18px]">
              Sippicity
            </span>
          </div>
          <p className="tex-[13px] text-black opacity-[.7]  py-[1rem]  font-bold">
            psum dolor sit amet, consectetur adipiscing elit. Fusce vehicula
            enim tincidunt,
          </p>
        </div>

        <div className=" rounded-[10px]  hover:bg-gray-300 p[1.5rem]">
          <div className="flex  items-center  gap-3">
            <div className="p-[4px]  rounded-[.8rem]  bg-[#dedef8]  h-[40px]  w-[40px]  items-center justify-center">
              <img src="logo.svg" alt="" className="w-[70%]" />
            </div>
            <span className=" font-semibold text-blue-500 text-[18px]">
              Sippicity
            </span>
          </div>
          <p className="tex-[13px] text-black opacity-[.7]  py-[1rem]  font-bold">
            psum dolor sit amet, consectetur adipiscing elit. Fusce vehicula
            enim tincidunt,
          </p>
        </div>

        <div className=" rounded-[10px]  hover:bg-gray-300 p[1.5rem]">
          <div className="flex  items-center  gap-3">
            <div className="p-[4px]  rounded-[.8rem]  bg-[#dedef8]  h-[40px]  w-[40px]  items-center justify-center">
              <img src="logo.svg" alt="" className="w-[70%]" />
            </div>
            <span className=" font-semibold text-blue-500 text-[18px]">
              Sippicity
            </span>
          </div>
          <p className="tex-[13px] text-black opacity-[.7]  py-[1rem]  font-bold">
            psum dolor sit amet, consectetur adipiscing elit. Fusce vehicula
            enim tincidunt,
          </p>
        </div>
      </div>



      <div className="card mt-[2rem] flex  justify-between p-[5rem]  rounded [10px] bg-gray-300">
        <div className=" ">
          <h1 className="text-white  text-2xl  font-bold">
            Read to switch a career ?
          </h1>
          <h2 className=" text-[25px] font-bold text-black">Lets get started !</h2>
          
        </div>

        <button className="border-[2px]  rounded-[10px]  py-[4px]  px-[50px]  text-[18px]  font-semibold hover:bg-gray-50 border-white">
            Get Started
          </button>
      </div>
    </div>
  );
};

export default Value;
