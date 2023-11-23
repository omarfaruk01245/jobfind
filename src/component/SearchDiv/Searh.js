import React from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import Value from "../ValueDiv/Value";

const Search = () => {
  return (
    <div className="grid gap-10 bg-gray-100 rounded-[10px]  p-[3rem] ">
      <form action="">
        <div className="flex justify-between items-center rounded-md  gap-[10px]  bg-white p-5 shadow-lg shadow-gray-700">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch size={40} />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Job Here..."
            />
            <AiOutlineCloseCircle
              size={40}
              className="text-blue-400 hover:text-green-500"
            />
          </div>
          <div className="flex gap-2 items-center">
            <AiOutlineSearch size={40} />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Job By Companiess..."
            />
            <AiOutlineCloseCircle
              size={40}
              className="text-blue-400 hover:text-green-500"
            />
          </div>
          <div className="flex gap-2 items-center">
            <AiOutlineSearch size={40} />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search By Countriess..."
            />
            <AiOutlineCloseCircle
              size={40}
              className="text-blue-400 hover:text-green-500"
            />
          </div>
          <button className="bg-blue-700 h-full p-5 px-10 rounded-[10px]  text-white cursor-pointer  hover:bg-green-700">
            Search
          </button>
        </div>
      </form>

      <div className="flex items-center gap-10 justify-center">
        <div className="flex items-center gap-2">
          <label htmlFor="type" className="text-[#808080]  font-semibold">
            Sort by:
          </label>

          <select
            name="id"
            id="level"
            className="bg-white rounded-[3px]  py-1"
          >
            <option Value="">Relevance</option>
            <option Value="">Inclusive</option>
            <option Value="">Start With</option>
            <option Value="">Contains</option>
          </select>
        </div>


        <div className="flex items-center gap-2">
          <label htmlFor="" className="text-[#808080]  font-semibold">
            Type:
          </label>

          <select
            name="id"
            id="relavance"
            className="bg-white rounded-[3px]  py-1"
          >
            <option Value="">Full-time</option>
            <option Value="">Part-time</option>
            <option Value="">Remote</option>
            <option Value="">Conttact</option>
          </select>
        </div>


        <div className="flex items-center gap-2">
          <label htmlFor="" className="text-[#808080]  font-semibold">
            Level:
          </label>

          <select
            name="id"
            id="relavance"
            className="bg-white rounded-[3px]  py-1"
          >
              <option Value="">Senior</option>
            <option Value="">Beginner</option>
            <option Value="">Intermediate</option>
            <option Value="">Advocate</option>
          </select>
        </div>

        <span  className="text-blue-700  cursor-pointer">Clear All</span>


      </div>


    </div>
  );
};

export default Search;
