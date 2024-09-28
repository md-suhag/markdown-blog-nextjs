import Hero from "@/components/Hero";
import HomeBlogs from "@/components/HomeBlogs";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pricing />
      <Testimonial />
      <HomeBlogs />
    </main>
  );
}
