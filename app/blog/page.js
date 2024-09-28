import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
const dirContent = fs.readdirSync("content", "utf-8");

const blogs = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

const Blog = () => {
  return (
    <div className="container p-4 mx-auto m">
      {/* Main heading for the blog section */}
      <h1 className="mb-8 text-4xl font-bold text-center">Blog</h1>

      {/* Grid layout for blog posts */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md dark:border-2"
          >
            {/* Blog post image */}
            <Image
              width={500}
              height={500}
              src={blog.image}
              alt={blog.title}
              className="object-cover w-full h-64"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..."
            />

            {/* Blog post content */}
            <div className="p-4">
              {/* Blog post title */}
              <h2 className="mb-2 text-2xl font-bold">{blog.title}</h2>

              {/* Blog post description */}
              <p className="mb-4 ">{blog.description}</p>

              {/* Blog post author and date */}
              <div className="mb-4 text-sm">
                <span>By {blog.author}</span> |{" "}
                <span>
                  {new Date(blog.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              {/* Link to the full blog post */}
              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant: "" })}
              >
                Click here
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
