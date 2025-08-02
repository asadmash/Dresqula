import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center ">
          <div className="">
            <div className="header_top_icon_wrapper">
              <BsFacebook />
            </div>
            <div className="header_top_icon_wrapper">
              <BsTwitter />
            </div>
            <div className="header_top_icon_wrapper">
              <BsInstagram />
            </div>
            <div className="header_top_icon_wrapper">
              <BsLinkedin />
            </div>
          </div>

          <div className="text-gray-500 uppercase text-[12px]">
            <strong>free shipping </strong>
            this week order over - $55
          </div>

          <div>
            <select name="currency" id="currency">
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
              <option value="BDT ৳">BDT ৳</option>
            </select>
            <select name="language" id="language">
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
