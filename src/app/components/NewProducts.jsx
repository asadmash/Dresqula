"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "@/lib/api/products";

// Products data
const productsData = [
  {
    img: "/jacket-1.jpg",
    title: "Jacket",
    desc: "MEN Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/skirt-1.jpg",
    title: "Skirt",
    desc: "BLack Floral Wrap Midi Skirt",
    rating: 5,
    price: "55.00",
  },
  {
    img: "/party-wear-1.jpg",
    title: "Party Wear",
    desc: "Women's Party Wear Shoes",
    rating: 3,
    price: "25.00",
  },
  {
    img: "/shirt-1.jpg",
    title: "Shirt",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/sports-1.jpg",
    title: "Sports",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    price: "58.00",
  },
  {
    img: "/watch-1.jpg",
    title: "Watches",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    price: "100.00",
  },
  {
    img: "/watch-2.jpg",
    title: "Watches",
    desc: "Pocket Watch Leather Pouch",
    rating: 4,
    price: "120.00",
  },
];

const NewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const data = await fetchProducts();
      if (data) setProducts(data);
    }
    getProducts();
  }, []);

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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
