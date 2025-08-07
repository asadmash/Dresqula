import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const ProductCard = ({ img, title, desc, rating, count, price, id }) => {



  const generateRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<AiFillStar key={i} />);
      } else if (rating > i - 1) {
        stars.push(<BsStarHalf key={i} />);
      } else {
        stars.push(<AiOutlineStar key={i} />);
      }
    }
    return <div className="flex gap-1 text-[20px] text-[#ff9529]">{stars}</div>;
  };

  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          className="w-full max-w-[300px] h-[400px] object-contain pt-2"
          src={img}
          width={200}
          height={300}
          alt={title}
          objectFit="cover"
        />
      </div>
      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase line-clamp-2 mt-2">
          {title}
        </h2>
        <p className="text-gray-500  line-clamp-3">{desc}</p>
        <div className="flex items-center gap-2">
          <div className="inline-block">{generateRating(rating)}</div>{" "}
          <span>({count})</span>
        </div>
        <div className="flex justify-between">
          <div className="font-bold flex gap-4 ">
            ${price}
            <del className="text-gray-500 font-normal">
              ${parseInt(price) + 50}.00
            </del>
          </div>
          <div>
            <Link
              href={`/product/${id}`}
              className="bg-[#7955fa] hover:bg-[#ee623a] text-white transition-all px-4 py-2 rounded-xl font-medium mb-2 inline-block"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
