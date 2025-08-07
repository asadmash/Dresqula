"use client";
import React, { useState, useEffect, useMemo } from "react";
import { fetchProducts } from "@/lib/api/products";
import { useRouter, useSearchParams } from "next/navigation";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Derive current selection from URL so active styling is correct
  const currentCategory = searchParams.get("category") || "";
  const currentQuery = searchParams.get("q") || "";

  // Load categories once
  useEffect(() => {
    async function getCategories() {
      try {
        // Fetch all products once; cache disabled upstream ensures freshness
        const data = await fetchProducts();
        if (Array.isArray(data)) {
          const uniqueCategories = [...new Set(data.map((p) => p.category))];
          setCategories(uniqueCategories);
        } else {
          setCategories([]);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]);
      }
    }
    getCategories();
  }, []);

  // Helper to build URLSearchParams immutably
  const buildParams = useMemo(
    () => (updates) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([key, val]) => {
        if (val === null || val === undefined || val === "") {
          params.delete(key);
        } else {
          params.set(key, String(val));
        }
      });
      return params.toString();
    },
    [searchParams]
  );

  const handleCategoryClick = (category) => {
    // Clicking a category should:
    // - set category
    // - clear q so category-only filtering happens (as requested)
    const qs = buildParams({ category, q: "" });
    router.push(qs ? `/?${qs}` : "/", { scroll: false });
  };

  return (
    <nav className="bg-white py-4">
      <div className="container_inner flex items-center justify-center space-x-8 uppercase">
        {categories.map((category) => {
          const isActive = currentCategory === category && !currentQuery;
          return (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`relative nav_link uppercase ${
                isActive ? "text-accent" : "text-gray-600"
              }`}
              aria-pressed={isActive}
            >
              {category}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
