import React from "react";
import ProductCard from "./ProductCard";

const NewProducts = ({ products }) => {
  return (
    <div className="@container">
      <div className="container_inner pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {products.map((item, index) => {
            return (
              <ProductCard
                key={index}
                img={item.image}
                title={item.title}
                desc={item.description}
                rating={item.rating.rate}
                count={item.rating.count}
                price={item.price}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
