"use client";
import React, { useEffect, useMemo, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useRouter, useSearchParams } from "next/navigation";

/**
 * URL-driven SearchBar for server filtering.
 * - Reads current q from URL
 * - Updates q as user types via shallow push (no scroll) with debounce
 * - IMPORTANT: While typing, category is cleared to avoid sticky category+q
 */
const SearchBar = ({
  placeholder = "Enter any product name...",
  onChange,
  debounceMs = 500,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const urlQuery = searchParams.get("q") || "";
  const [value, setValue] = React.useState(urlQuery);

  // Keep local input synced with URL changes (e.g., back/forward navigation)
  useEffect(() => {
    setValue(urlQuery);
  }, [urlQuery]);

  // Stable debounce implementation across renders
  const timerRef = useRef(null);
  const debouncedPush = (next) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      // Always set/clear q based on input
      const trimmed = next.trim();
      if (trimmed.length) {
        params.set("q", trimmed);
      } else {
        params.delete("q");
      }

      // Clear category while typing to satisfy requirement:
      // typing should remove any existing category from URL
      params.delete("category");

      const qs = params.toString();
      router.push(qs ? `/?${qs}` : "/", { scroll: false });
      onChange?.(next);
    }, debounceMs);
  };

  const handleChange = (e) => {
    const next = e.target.value;
    setValue(next);
    debouncedPush(next);
  };

  // const handleClear = () => {
  //   setValue("");
  //   debouncedPush("");
  // };

  // const showClear = Boolean(value?.length);

  return (
    <div className="w-full sm:w-[300px] md:w-[70%] relative">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="border-gray-200 border p-2 pr-10 px-4 rounded-lg w-full"
        aria-label="Search products"
      />
      <BsSearch
        size={20}
        className="absolute right-0 top-0 mr-3 mt-3 text-gray-400 pointer-events-none"
        aria-hidden="true"
      />
      {/* {showClear && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          className="absolute right-8 top-0 mt-2.5 text-gray-400 hover:text-gray-600"
          title="Clear"
        >
          ×
        </button>
      )} */}
    </div>
  );
};

export default SearchBar;
