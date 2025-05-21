import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/blog.json";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <section className="text-white mt-16 md:mt-36" id="blog">
      <Helmet>
        <title>MarketingOdus Blog - Insights, Strategy & Innovation</title>
        <meta
          name="description"
          content="Read expert tips, insights, and trends in digital marketing, branding, and content strategy from the MarketingOdus team."
        />
        <meta property="og:title" content="MarketingOdus Blog" />
        <meta
          property="og:image"
          content="https://marketingodus.com/ogimagemo.jpg"
        />
        <link rel="canonical" href="https://marketingodus.com/blog" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-black md:text-4xl font-bold mb-12 text-center">
          Our Blog
        </h1>

        <div className="flex justify-center md:justify-start flex-wrap gap-20">
          {posts.map(({ id, slug, title, image, excerpt }) => (
            <Link
              key={id}
              to={`/blog/${slug}`}
              className="block bg-[#18181f] rounded-lg overflow-hidden hover:shadow-lg transition-shadow w-[300px]"
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
