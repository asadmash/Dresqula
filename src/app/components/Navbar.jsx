import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="@container">
        <div className="container_inner flex w-fit gap-10 mx-auto font-medium py-4 text-blackfish">
          <div className="nav_link relative cursor-pointer">HOME</div>
          <div className="nav_link relative cursor-pointer">CATEGORIES</div>
          <div className="nav_link relative cursor-pointer">{`MEN'S`}</div>
          <div className="nav_link relative cursor-pointer">{`WOMEN'S`}</div>  
          <div className="nav_link relative cursor-pointer">JEWELARY</div>
          <div className="nav_link relative cursor-pointer">PERFUME</div>
          <div className="nav_link relative cursor-pointer">BLOG</div>
          <div className="nav_link relative cursor-pointer">HOT OFFERS</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
