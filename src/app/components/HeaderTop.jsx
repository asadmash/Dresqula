import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <BsFacebook />
            </div>
            <div>
              <BsTwitter />
            </div>
            <div>
              <BsInstagram />
            </div>
            <div>
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
