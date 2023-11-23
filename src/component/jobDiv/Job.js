import React from "react";
import { BiTimeFive } from "react-icons/bi";
import Data from "./Data";
import logo from "../../Assets/img1.jpeg";




const Job = () => {
  return (
    <div className="flex gap-10 justify-center flex-wrap text-center py-10">
     {
      Data.map(({id,image, title, time, location, desc, company}) =>{
        return(
          <div  key={id} className="group group/item w-[250px]  p-[20px]  bg-white rounded-[10px]  hover:bg-blue-700  shadow-lg shadow-gray-400/700 hover:shadow-lg">
          <span className="flex justify-between items-center gap-4">
            <h1 className="text-[16px]  group-hover:text-gray-50">
              {title}
            </h1>
            <span className="flex items-center gap-1">
              <BiTimeFive /> {time}
            </span>
          </span>
          <h6 className="text-left">{location}</h6>
          <p className="text-[13px] text-yellow-900 pt-[20px]  border-t-[2px]  mt-[20px]  group-hover:text-white">
          {desc}
          </p>
          <div>
            <img  src={logo}  className='w-[40px] h-[40px]   rounded-full'/> 
            
            <span>{company}</span>
          </div>
  
          <button className="border-[2px] rounded-[2px]   block p-[10px] w-full text-xl  hover:bg-white  hover:text-green-600">
            Aply Now
          </button>
        </div>
        )
      })
     }
    </div>
  );
};

export default Job;
