import Image from "next/image";
import Hero from "./components/Hero";
import NewProducts from "./components/NewProducts";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
   <div>
    <Hero/>
    <NewProducts/>
    <Testimonial/>
   </div>
  );
}
