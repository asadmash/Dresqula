import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import Testimonial from "./components/Testimonial";
import Navbar from "./components/Navbar";
import { fetchProducts } from "@/lib/api/products";

export default async function Home({ searchParams }) {
  const products = await fetchProducts();

  const searchQuery = searchParams.q || "";
  const categoryQuery = searchParams.category || "";

  let filteredProducts = products;

  if (searchQuery) {
    filteredProducts = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (categoryQuery) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === categoryQuery
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
