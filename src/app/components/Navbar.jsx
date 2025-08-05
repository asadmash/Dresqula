"use client";
import React, { useState, useEffect } from "react";
import { fetchProducts } from "@/lib/api/products"; // Assuming products.js has a way to fetch all products
import { useRouter } from "next/navigation";

const Navbar = ({ selectedCategory }) => {
  // Receive selectedCategory as prop
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function getCategories() {
      try {
        const data = await fetchProducts(); // Fetch all products to extract categories
        if (data && Array.isArray(data)) {
          // Extract unique categories
          const uniqueCategories = [
            ...new Set(data.map((product) => product.category)),
          ];
          setCategories(uniqueCategories);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    getCategories();
  }, []);

  const handleCategoryClick = (category) => {
    router.push(`/?category=${category}`); // Update URL with category
  };

  return (
    <nav className="bg-white py-4">
      <div className="container_inner flex items-center justify-center space-x-8 uppercase">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`relative nav_link uppercase ${
              selectedCategory === category ? "text-accent" : "text-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
