// "use client";
// import { useRouter, useSearchParams } from "next/navigation";
// import React from "react";

// const CategoryFilter = ({ categories = [] }) => {
//  const router = useRouter();
//  const searchParams = useSearchParams();

//  const currentCategory = searchParams.get("category") || "";

//  const handleCategoryChange = (e) => {
//    const category = e.target.value;

//    // Preserve existing params (like q) and only mutate category
//    const params = new URLSearchParams(searchParams.toString());

//    if (category) {
//      params.set("category", category);
//    } else {
//      params.delete("category");
//    }

//    const qs = params.toString();
//    router.push(qs ? `/?${qs}` : "/", { scroll: false });
//  };

//  return (
//    <div className="w-full sm:w-[200px]">
//      <select
//        className="border-gray-200 border p-2 px-4 rounded-lg w-full"
//        onChange={handleCategoryChange}
//        value={currentCategory}
//        aria-label="Category filter"
//      >
//        <option value="">All Categories</option>
//        {categories.map((category) => (
//          <option key={category} value={category}>
//            {category}
//          </option>
//        ))}
//      </select>
//    </div>
//  );
// };

// export default CategoryFilter;
