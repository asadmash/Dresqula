import React from "react";
import ProductCard from "./ProductCard";

const NewProducts = ({ products }) => {
  return (
    <div className="@container">
      <div className="container_inner pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="flex flex-wrap -mx-4">
          {products.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8"
              >
                <ProductCard
                  img={item.image}
                  title={item.title}
                  desc={item.description}
                  rating={item.rating.rate}
                  count={item.rating.count}
                  price={item.price}
                  id={item.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
