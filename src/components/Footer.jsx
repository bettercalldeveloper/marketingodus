import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();

    // Set hidden fields for date and time
    formRef.current.querySelector('input[name="date"]').value = date;
    formRef.current.querySelector('input[name="time"]').value = time;

    emailjs
      .sendForm(
        "service_ys3f3m8", // replace with your EmailJS service ID
        "template_lcpqw0f", // replace with your template ID
        formRef.current,
        "wxyIyH_9XQMmrkejE" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <footer id="contact" className="bg-[#121217] text-white mt-16 md:mt-36">
      <div className="px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[87%] mx-auto">
        <div className="space-y-8">
          <div>
            <p className="text-sm uppercase tracking-wide">Mail us at</p>
            <p className="text-xl font-semibold">info@marketingodus.com</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide">HR Enquiries</p>
            <p className="text-xl font-semibold">+91 9999 999 999</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide">Sales Enquiries</p>
            <p className="text-xl font-semibold">+91 9999 999 999</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide">INDIA</p>
            <p className="text-xl font-semibold">
              #451/895/8/8 MarketingOdus, Rajasthan 313001
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Enter Your Name"
              className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-yellow-300"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Enter Your Email"
              className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-yellow-300"
              required
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Enter Your Mobile No."
              className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-yellow-300"
            />
            <input
              type="text"
              name="user_subject"
              placeholder="Enter the Topic"
              className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-yellow-300"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Enter the Message"
              className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-yellow-300 resize-none"
              required
            />
            {/* Hidden fields for date and time */}
            <input type="hidden" name="date" />
            <input type="hidden" name="time" />

            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-full transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="max-w-[87%] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center text-center md:text-left space-x-4 text-sm">
            <p>All Rights Reserved by MarketingOdus</p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://x.com/marketingodus"
              className="hover:text-yellow-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com/marketingodus"
              className="hover:text-yellow-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://instagram.com/marketingodus"
              className="hover:text-yellow-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
