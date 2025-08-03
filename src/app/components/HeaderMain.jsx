import Image from "next/image";
import React from "react";
import { BsPerson, BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6 @container">
      <div className="container_inner sm:flex justify-between items-center">
        <div className="font-bold text-center pb-4 sm:pb-0 text-blackfish">
          <Image src="/logo.png" width={150} height={150} alt="logo" />
        </div>
        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            type="text"
            placeholder="Enter any product name..."
            className="border-gray-200 border p-2 px-4 rounded-lg w-full "
          />
          <BsSearch
            size={20}
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
          />
        </div>
        <div className="hidden lg:flex text-gray-500 text-[30px] gap-4">
          <BsPerson />
          <div className="relative">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <div className="relative">
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
