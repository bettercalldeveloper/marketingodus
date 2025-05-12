import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/blog.json";

const Blog = () => {
  return (
    <section className=" text-white mt-16 md:mt-36" id="blog">
      <div className="max-w-[87%] mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Blog
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ id, slug, title, image, excerpt }) => (
            <Link
              key={id}
              to={`/blog/${slug}`}
              className="block bg-[#18181f] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-60 w-full overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
                <p className="mt-3 text-gray-400 line-clamp-3">{excerpt}</p>
                <span className="inline-block mt-4 text-yellow-300 font-medium">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
