import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import Testimonial from "./components/Testimonial";
import { fetchProducts } from "@/lib/api/products";

export default async function Home({ searchParams }) {
  const products = await fetchProducts();

  const searchQuery = searchParams.q || "";

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Hero />
      <NewProducts products={filteredProducts} />
      <Testimonial />
    </div>
  );
}
