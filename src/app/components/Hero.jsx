"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const slideData = [
  {
    id: 0,
    img: "/banner-1.jpg",
    title: "Trending Item",
    mainTitle: "WOMEN'S LATEST FASHION SALE",
    price: "$20",
  },
  {
    id: 1,
    img: "/banner-2.jpg",
    title: "Trending Accessories",
    mainTitle: "MODERN SUNGLASSES",
    price: "$15",
  },
  {
    id: 2,
    img: "/banner-3.jpg",
    title: "Sale Offer",
    mainTitle: "NEW FASHION SUMMER SALE",
    price: "$30",
  },
];

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Hero = ({ q, category }) => {
  const hasSearch = q?.trim().length > 0;
  const hasCategory = category?.trim().length > 0;

  // If search or category is active, hide the hero
  if (hasSearch || hasCategory) return null;

  return (
    <div className="@container">
      <div className="container_inner pt-6 lg:pt-0">
        <Slider
          {...settings}
          className="w-full h-full max-h-[300px] md:max-h-[700px]"
        >
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
