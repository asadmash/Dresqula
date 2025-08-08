import React from "react";
import ProductCard from "./ProductCard";

const NewProducts = ({ products }) => {
  // Create a unique key based on the products. This will change whenever the
  // list of products changes (e.g., due to filtering or searching).
  const productsKey = products.map((p) => p.id).join("-");

  return (
    <div className="@container" id="new-products">
      <div className="container_inner pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        {products.length === 0 ? (
          <div className="text-center text-gray-500 text-xl py-16">
            No product found by this name
          </div>
        ) : (
          <div
            key={productsKey}
            className="flex flex-wrap -mx-4 animate-fadeIn"
          >
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
        )}
      </div>
    </div>
  );
};

export default NewProducts;
