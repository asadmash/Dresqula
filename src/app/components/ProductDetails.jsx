import Image from "next/image";
import React from "react";

const ProductDetails = ({ product: { image, title, description, price } }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:pt-20 grid md:grid-cols-2 gap-10">
      <div className="relative w-full h-[300px] md:h-[400px] bg-white rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain rounded-xl shadow"
        />
      </div>
      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-600">{description}</p>
        <p className="text-xl font-semibold text-gray-600">{price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
