"use client";
import Image from "next/image";
import React from "react";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SearchBar from "./SearchBar";
import UserAvatar from "./UserAvatar";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6 @container sticky top-0 z-40 bg-white">
      <div className="container_inner sm:flex justify-between items-center">
        <div className="font-bold text-center pb-4 sm:pb-0 text-blackfish">
          <Image
            src="/logo.png"
            width={150}
            height={40}
            alt="logo"
            priority
            className="w-[150px] h-[40px]"
          />
        </div>
        <SearchBar />
        <div className="hidden lg:flex text-gray-500 text-[30px] gap-4 items-center">
          <UserAvatar />
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
