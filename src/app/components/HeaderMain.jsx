import React from "react";
import { BsPerson, BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMain = () => {
  return (
    <div>
      <div>
        <div>Sick</div>
        <div>
          <input type="text" placeholder="Enter any product name..." />
          <BsSearch />
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
