import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import posts from "../data/blog.json";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const paragraphs = post.content.split("\n\n");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className=" mt-16 md:mt-36 px-4">
      <div className="max-w-[87%] md:max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="space-y-6">
          <h1 className="text-2xl md:text-5xl font-bold leading-tight">
            {post.title}
          </h1>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg"
          />
        </header>

        {/* Content */}
        <section className="prose prose-invert prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>
      </div>
    </article>
  );
};

export default BlogPost;
