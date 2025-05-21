import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

const Careers = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();

    // Inject dynamic date/time into hidden fields
    formRef.current.querySelector('input[name="date"]').value = date;
    formRef.current.querySelector('input[name="time"]').value = time;

    emailjs
      .sendForm(
        "service_ys3f3m8", // Replace with your actual EmailJS service ID
        "template_g6e85wv", // Replace with your actual template ID
        formRef.current,
        "wxyIyH_9XQMmrkejE" // Replace with your actual public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Application submitted! We’ll be in touch.");
          setSending(false);
          formRef.current.reset();
          setFileName("No file chosen");
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Oops—something went wrong. Please try again.");
          setSending(false);
        }
      );
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  };

  return (
    <section id="careers" className=" mt-16 md:mt-36 max-w-[87%] mx-auto">
      <Helmet>
        <title>Careers at MarketingOdus</title>
        <meta
          name="description"
          content="Join the MarketingOdus team and shape the future of digital marketing. Explore open roles and apply now."
        />
        <meta
          property="og:title"
          content="Work With Us - Careers at MarketingOdus"
        />
        <meta
          property="og:image"
          content="https://marketingodus.com/ogimagemo.jpg"
        />

        <link rel="canonical" href="https://marketingodus.com/careers" />
      </Helmet>

      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-5">
            Be Part of Our Marketing Revolution
          </h1>
          <p className="text-black mb-8">
            Interested in joining MarketingOdus? Fill out the form below and
            send your resume.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            encType="multipart/form-data"
          >
            <input
              type="text"
              name="fullName"
              placeholder="Your full name*"
              required
              className="w-full bg-transparent border-b border-gray-600 text-black py-2 focus:outline-none focus:border-yellow-300"
            />

            <input
              type="text"
              name="role"
              placeholder="Which role are you applying for?*"
              required
              className="w-full bg-transparent border-b border-gray-600 text-black py-2 focus:outline-none focus:border-yellow-300"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              required
              className="w-full bg-transparent border-b border-gray-600 text-black py-2 focus:outline-none focus:border-yellow-300"
            />

            <input
              type="url"
              name="portfolio"
              placeholder="Portfolio/Work URL"
              className="w-full bg-transparent border-b border-gray-600 text-black py-2 focus:outline-none focus:border-yellow-300"
            />

            <textarea
              name="why"
              rows={5}
              placeholder="Please write 5 lines why this role interests you?*"
              required
              className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-yellow-300 resize-none text-black"
            />

            <div className="flex flex-col md:flex-row md:items-center space-x-4">
              <input
                id="resume-upload"
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx,.txt,.rtf,.odt"
                required
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="resume-upload"
                className="cursor-pointer bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full transition max-w-max"
              >
                Upload Resume
              </label>
              <span className="text-black italic">{fileName}</span>
            </div>

            {/* Hidden date/time fields for EmailJS */}
            <input type="hidden" name="date" />
            <input type="hidden" name="time" />

            <button
              type="submit"
              disabled={sending}
              className="bg-yellow-300 hover:bg-yellow-400 text-black font-medium py-2 px-8 rounded-full transition disabled:opacity-50"
            >
              {sending ? "Sending…" : "Send"}
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-2">
            Current Openings
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium">Creative</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded">
                  <span className="text-gray-200">
                    Senior Manager – Creative
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium">Digital Marketing</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded">
                  <span className="text-gray-200">
                    Senior Manager – Digital Marketing
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium">HR</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded">
                  <span className="text-gray-200">
                    No openings at this time
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium">Technology</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded">
                  <span className="text-gray-200">
                    Junior Full-Stack Developer
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
