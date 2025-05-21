import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import posts from "../data/blog.json";
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const paragraphs = post.content.split(/\n\s*\n/);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const parseText = (text) => {
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    text = text.replace(/_(.*?)_/g, "<em>$1</em>");

    text = text.replace(
      /(Book (a )?(free )?(strategy )?(consultation|call)[^.]*)/gi,
      '<a href="#contact" class="text-blue-600 underline">$1</a>'
    );
    return text;
  };

  return (
    <article className="mt-16 md:mt-36 px-4">
      <Helmet>
        <title>{`${post.title} - MarketingOdus Blog`}</title>
        <meta name="description" content={post.excerpt || post.title} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || post.title} />
        <meta property="og:image" content={post.image} />
        <link
          rel="canonical"
          href={`https://marketingodus.com/blog/${post.slug}`}
        />
      </Helmet>
      <div className="max-w-4xl mx-auto space-y-14">
        <header className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
            {post.title}
          </h1>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 sm:h-80 md:h-[450px] object-cover object-top rounded-xl"
          />
        </header>

        <section className="prose prose-neutral prose-lg md:prose-xl prose-headings:font-semibold prose-headings:text-black prose-p:text-gray-700 max-w-none text-lg">
          {paragraphs.map((para, i) => {
            const trimmed = para.trim();

            const isHeading =
              /^[🧭✨🤝💡🔁🌆🏙️📍🗓️🚀📞📸💬💼📊✍️📍🎯🔍🎥📌💡🎉💬🧠🎬🎨🔧💻📈📣🧑‍🤝‍🧑💬🔗🔎📌]/.test(
                trimmed
              );
            const isCallout = /^👉|^✅|^📞|^🚀/.test(trimmed);
            const isBullet =
              /^- /.test(trimmed) || /^[🍴🍛🥭☕📍]/.test(trimmed);

            const parsedHTML = parseText(trimmed);

            if (isHeading) {
              return (
                <h2
                  key={i}
                  className="text-2xl mt-10 mb-2"
                  dangerouslySetInnerHTML={{ __html: parsedHTML }}
                />
              );
            } else if (isCallout) {
              return (
                <div
                  key={i}
                  className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded-md"
                >
                  <p
                    className="m-0"
                    dangerouslySetInnerHTML={{ __html: parsedHTML }}
                  />
                </div>
              );
            } else if (isBullet) {
              return (
                <li
                  key={i}
                  className="ml-6 list-disc"
                  dangerouslySetInnerHTML={{ __html: parsedHTML }}
                />
              );
            } else {
              return (
                <p key={i} dangerouslySetInnerHTML={{ __html: parsedHTML }} />
              );
            }
          })}
        </section>
      </div>
    </article>
  );
};

export default BlogPost;
