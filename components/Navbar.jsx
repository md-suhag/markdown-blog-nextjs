import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./ThemeBtn";
import TopLoadingBar from "./TopLoadingBar";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 p-4 border-b bg-background/50 backdrop-blur ">
      <TopLoadingBar />
      <div className="container flex items-center justify-between mx-auto">
        <Link href={"/"}>
          <div className="text-lg font-bold uppercase">Suhag Blog</div>
        </Link>

        <div className="items-center hidden gap-6 md:flex">
          <Link
            href="/"
            className="transition-all duration-300  hover:text-[#ac78fff1]"
          >
            {" "}
            Home
          </Link>
          <Link
            href="/about"
            className="transition-all duration-300 hover:text-[#ac78fff1]"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="transition-all duration-300  hover:text-[#ac78fff1]"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="transition-transform duration-300 hover:text-[#ac78fff1]"
          >
            Contact
          </Link>
          <div className="flex items-center gap-2">
            <Button className="" variant="outline">
              Login
            </Button>
            <Button variant="">Sign Up</Button>
            <ModeToggle />
          </div>
        </div>
        <div className="md:hidden">
          <Sheet>
            <span className="mx-3">
              <ModeToggle />
            </span>
            <SheetTrigger>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 23 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="my-4 font-bold uppercase">
                  Suhag Blog
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-4 ">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>{" "}
                    <div>
                      <Button className="mr-2 text-xs" variant="outline">
                        Login
                      </Button>
                      <Button className="text-xs" variant="">
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
