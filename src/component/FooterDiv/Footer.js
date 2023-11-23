import React from "react";
import { AiFillFacebook} from 'react-icons/ai';
import { BsLinkedin} from 'react-icons/bs';
import { FaTwitter} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="p-[5rem]  pb-4  bg-blue-600 rounded-[10px]  gap-8 grid grid-cols-5  m-auto items-center justify-center">
      <div>
        <div>
          <h1 className="text-[25px]  text-blue-50">
            <strong>JOB</strong> Search
          </h1>
        </div>

        <p className="text-white  m-auto pt-[13px]  opacity-70 leading-7">
          psum dolor sit amet, sagittis odio vitae, cursus diam. Praesent eget
          euismod ve
        </p>
      </div>
      <div className="grid">
        <span className="text-[18px]  font-semibold pb-[1.5rem]  text-white">
          Company
        </span>
        <div className="grid gap-3">
          <ul>
            <li className="text-white opacity-[.7]  hover:opacity-[1]">
              
              About Us
            </li>
            <li className="text-white opacity-[.7]  hover:opacity-[1]">
              Features
            </li>
            <li className="text-white opacity-[.7]  hover:opacity-[1]">
            
              News
            </li>
            <li className="text-white opacity-[.7]  hover:opacity-[1]"> FAQ</li>
          </ul>
        </div>
      </div>

      <div className="grid">
        <span className="text-[18px]  font-semibold pb-[1.5rem]  text-white">
          Resourcees
        </span>
        <div className="grid gap-3">
          <ul>
            <li className="text-white opacity-[.7]  hover:opacity-[1]">
              
              Account
            </li>
            <li className="text-white opacity-[.7]  hover:opacity-[1]">
              Support center
            </li>
            <li className="text-white opacity-[.7]  hover:opacity-[1]">
              
              Feedback
            </li>
            <li className="text-white opacity-[.7]  hover:opacity-[1]">
            
              Contact Us
            </li>
          </ul>
        </div>
      </div>

      <div className="grid">
        <span className="text-[18px]  font-semibold pb-[1.5rem]  text-white">
          Support
        </span>
        <div className="grid gap-3">
          <ul>
            <li className="text-white opacity-[.7]  hover:opacity-[1]">
              
              Events
            </li>
            <li className="text-white opacity-[.7]  hover:opacity-[1]">
              Promo
            </li>
            <li className="text-white opacity-[.7]  hover:opacity-[1]">
            
              Req Demo
            </li>
            <li className="text-white opacity-[.7]  hover:opacity-[1]">
              
              Creaers
            </li>
          </ul>
        </div>
      </div>

      <div className="grid">
        <span className="text-[18px]  font-semibold pb-[1.5rem]  text-white">
          Contact Info
        </span>
        <small  className="text-[px14]  text-white">israteach8outlock.com</small>
        <div  className="flex gap-4 py-[1rem]">

            < AiFillFacebook className=" bg-white  pp-[18px]  h-[35px]   w-[35px] "  size={30}/>
            <BsLinkedin className=" bg-white  pp-[18px]  h-[35px]   w-[35px]"  size={30}/>
            <FaTwitter  className="bg-white  pp-[18px]  h-[35px]   w-[35px]"  size={30}/>
          
            


        </div>
      </div>
    </div>
    
  );
};

export default Footer;
