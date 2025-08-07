"use client";
import Image from "next/image";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SearchBar from "./SearchBar";
import { useSession } from "next-auth/react";

const HeaderMain = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="border-b border-gray-200 py-6 @container">
        <div className="container_inner sm:flex justify-between items-center">
          <div className="font-bold text-center pb-4 sm:pb-0 text-blackfish">
            <Image src="/logo.png" width={150} height={150} alt="logo" />
          </div>
          <SearchBar />
          <div className="hidden lg:flex text-gray-500 text-[30px] gap-4">
            <div className="flex items-center gap-2.5">
               <Image
                        src={session.user.image}
                        alt={session.user.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                        objectFit="cover"
                      />
            </div>

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
  }
  return (
    <div className="border-b border-gray-200 py-6 @container">
      <div className="container_inner sm:flex justify-between items-center">
        <div className="font-bold text-center pb-4 sm:pb-0 text-blackfish">
          <Image src="/logo.png" width={150} height={150} alt="logo" />
        </div>
        <SearchBar />
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
