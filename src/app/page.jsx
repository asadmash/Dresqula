import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import Testimonial from "./components/Testimonial";
import { fetchProducts } from "@/lib/api/products";
import SearchBar from "./components/SearchBar";

/**
 * Server component page:
 * - Reads query params q and category from searchParams
 * - Fetches filtered products on the server via fetchProducts({ q, category })
 * - Renders a client SearchBar that updates the URL (q) with shallow navigation
 */
export default async function Home({ searchParams }) {
  const q = typeof searchParams?.q === "string" ? searchParams.q : "";
  const category =
    typeof searchParams?.category === "string" ? searchParams.category : "";

  // Server-side filtering for correctness and SEO
  const products = await fetchProducts({ q, category });

  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 my-4"></div>
      <NewProducts products={products} />
      <Testimonial />
    </div>
  );
}
