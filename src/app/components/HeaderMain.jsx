import React from "react";
import { BsPerson, BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6 @container">
      <div className="container-inner sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackfish">Sick</div>
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input type="text" placeholder="Enter any product name..." className="border-gray-200 border p-2 px-4 rounded-lg w-full "/>
          <BsSearch size={20} className="absolute right-0 top-0 mr-3 mt-3 text-gray-400" />
        </div>
        <div>
          <BsPerson />
          <div>
            <FiHeart />
            <div>0</div>
          </div>
          <div>
            <HiOutlineShoppingBag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
