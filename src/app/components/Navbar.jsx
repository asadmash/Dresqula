import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="@container">
        <div className="container_inner flex w-fit gap-10 mx-auto font-medium py-4 text-blackfish">
          <div className="nav_link relative">HOME</div>
          <div className="nav_link relative">CATEGORIES</div>
          <div className="nav_link relative">{`MEN'S`}</div>
          <div className="nav_link relative">{`WOMEN'S`}</div>
          <div className="nav_link relative">{`WOMEN'S`}</div>
          <div className="nav_link relative">{`WOMEN'S`}</div>
          <div>JEWELARY</div>
          <div className="nav_link relative">{`WOMEN'S`}</div>
          <div className="nav_link relative">{`WOMEN'S`}</div>
          <div>PERFUME</div>
          <div className="nav_link relative">{`WOMEN'S`}</div>
          <div className="nav_link relative">BLOG</div>
          <div className="nav_link relative">HOT OFFERS</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
