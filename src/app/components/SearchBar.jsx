"use client";
import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) {
        router.push(`/?q=${query}`);
      } else {
        router.push(`/`);
      }
    }, 500); // Debounce time of 500ms

    return () => clearTimeout(timer);
  }, [query, router]);

  return (
    <div className="w-full sm:w-[300px] md:w-[70%] relative">
      <input
        type="text"
        placeholder="Enter any product name..."
        className="border-gray-200 border p-2 px-4 rounded-lg w-full "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <BsSearch
        size={20}
        className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
      />
    </div>
  );
};

export default SearchBar;
