import React from "react";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-[3rem] ">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blue-600">
          <strong className="text-4xl">JOB </strong>
          BANK
        </h1>
      </div>

      <div className=" menu flex gap-8 ">
        <li className="menuList text-[#6f6f6f]  hover:text-blue-400">Jobs</li>
        <li className="menuList text-[#6f6f6f]  hover:text-blue-400">
          Companies
        </li>
        <li className="menuList text-[#6f6f6f]  hover:text-blue-400">About</li>
        <li className="menuList text-[#6f6f6f]  hover:text-blue-400">
          Contact
        </li>
        <li className="menuList text-[#6f6f6f]  hover:text-blue-400">Blog</li>
        <li className="menuList text-[#6f6f6f]  hover:text-blue-400">Login</li>
        <li className="menuList text-[#6f6f6f]  hover:text-blue-400">
          Register
        </li>
      </div>
    </div>
  );
};

export default NavBar;
