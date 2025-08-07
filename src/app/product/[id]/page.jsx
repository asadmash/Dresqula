"use client";
import { notFound, redirect } from "next/navigation";
import React, { Suspense } from "react";
import { fetchProductById } from "@/lib/api/products";
import ProductDetails from "@/app/components/ProductDetails";
import { getServerSession } from "next-auth";
// Use the auth handler options from the root NextAuth config
import { authOptions } from "../../../../auth";

const ProductPage = async ({ params }) => {
  const { id } = params;

  // Get the session on the server
  const session = await getServerSession(authOptions);

  // if no session exists, redirect to the sign-in page
  if (!session) {
    // Redirect to sign-in, and then back to this product page after login.
    redirect(`/signin?callbackUrl=/product/${id}`);
  }

  // Fetch data directly on the server.
  // If fetchProductById throws an error, Next.js will catch it and show the nearest error.jsx.
  const product = await fetchProductById(id);

  // If the fetch was successful but returned no product, show the not-found page.
  if (!product) {
    <Suspense>notFound();</Suspense>;
  }

  // No need for loading or error states, React Suspense and the notFound() function handle it.
  return <ProductDetails product={product} />;
};

export default ProductPage;
