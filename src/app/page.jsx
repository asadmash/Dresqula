import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import Testimonial from "./components/Testimonial";
import Navbar from "./components/Navbar";
import { fetchProducts } from "@/lib/api/products";

export default async function Home({ searchParams }) {
  const products = await fetchProducts();

  // Next.js 15: searchParams can be async (ReadonlyURLSearchParams or a Promise in edge-like runtimes).
  // Safely support both by awaiting if it's thenable and using .get() API.
  const sp = typeof searchParams?.then === "function" ? await searchParams : searchParams;

  const q = sp?.get?.("q") ?? "";
  const category = sp?.get?.("category") ?? "";

  let filteredProducts = products;

  if (q) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(q.toLowerCase())
    );
  }

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  return (
    <div>
      <Hero />
      <NewProducts products={filteredProducts} />
      <Testimonial />
    </div>
  );
}
