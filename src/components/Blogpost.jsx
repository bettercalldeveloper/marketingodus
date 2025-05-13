import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import posts from "../data/blog.json";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const paragraphs = post.content.split("\n\n");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="mt-16 md:mt-36 px-4">
      <div className="max-w-4xl mx-auto space-y-14">
        {/* Blog Title */}
        <header className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            {post.title}
          </h1>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl"
          />
        </header>

        {/* Blog Content */}
        <section className="prose prose-neutral prose-lg md:prose-xl prose-headings:font-semibold prose-headings:text-black prose-p:text-gray-700 max-w-none text-lg">
          {paragraphs.map((para, i) => {
            const isHeading = para.match(/^(✨|🤝|💡|🔁|🌆|🏙️|📍|🗓️)/);
            const isListItem = para.match(/^✅|^👉|^🍴|^🍛|^🥭|^☕|^📍/);

            if (isHeading) {
              return (
                <h2 key={i} className="text-2xl mt-10 mb-2">
                  {para}
                </h2>
              );
            } else if (isListItem) {
              return (
                <p
                  key={i}
                  className="pl-4 border-l-4 border-yellow-400 bg-yellow-50 rounded-md py-2 px-3"
                >
                  {para}
                </p>
              );
            } else {
              return <p key={i}>{para}</p>;
            }
          })}
        </section>
      </div>
    </article>
  );
};

export default BlogPost;
