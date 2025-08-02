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

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
