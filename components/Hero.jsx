import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AutoTyping from "./AutoTyping";

const Hero = () => {
  return (
    <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
      <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
        <h1 className="text-3xl leading-snug text-gray-800 uppercase md:leading-snug dark:text-gray-200 md:text-5xl">
          A <span className="font-semibold">free blog website</span> for all{" "}
          built using <br />
          <span className="font-semibold underline decoration-primary">
            <AutoTyping />
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 md:mt-6 dark:text-gray-300">
          Open source Tailwind UI components and templates to{" "}
          <br className="hidden lg:block" /> bootstrap your new apps, projects,
          or landing sites!
        </p>
        <Button className="my-6 text-base px -6 " variant="">
          Explore Blog
        </Button>
        <div className="mt-6 bg-transparent border rounded-lg md:hidden dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20"></div>
      </div>
      <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
        <Image
          width={100}
          height={100}
          priority="true"
          src="/banner1.svg"
          alt="Suhag blog banner, nextjs image"
          className="w-full h-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
