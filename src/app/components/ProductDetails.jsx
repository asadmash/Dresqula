"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { useStateValue } from "../context/StateContext";

const ProductDetails = ({
  product: { id, image, title, description, price, rating },
}) => {

// use state value dispatch
const {dispatch} = useStateValue();

// handler function for state
const handleAddToCart = () => {
  console.log("Adding To Cart:", title);

  // dispatch the action object
  dispatch({
    type: "ADD_TO_CART",
    payload: {
      id: id,
      name: title,
      price: price,
      image: image,
      quantity: 1,
    }
  })
}

  const generateRating = (rate) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rate >= i) {
        stars.push(<AiFillStar key={i} />);
      } else if (rate > i - 1) {
        stars.push(<BsStarHalf key={i} />);
      } else {
        stars.push(<AiOutlineStar key={i} />);
      }
    }
    return <div className="flex gap-1 text-[20px] text-[#ff9529]">{stars}</div>;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:pt-20 grid md:grid-cols-2 gap-10 h-full">
      <div className="w-full h-[300px] md:h-[400px] bg-white rounded-2xl border-2 border-gray-200 p-4 shadow">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-between">
          <p className="text-xl font-semibold text-blue-400">$ {price}</p>
          <div className="flex items-center gap-2">
            <span>({rating.count})</span>
            <div className="inline-block">{generateRating(rating.rate)}</div>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-amber-200 hover:bg-amber-600 hover:text-white transition-all px-4 py-2 rounded-xl font-medium" onClick={handleAddToCart}
          >
            Add To Cart
          </button>
          <Link
            href="/"
            className="bg-amber-200 hover:bg-amber-600 hover:text-white transition-all px-4 py-2 rounded-xl font-medium"
          >
            Add To Fav
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
