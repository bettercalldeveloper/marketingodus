import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import marketingOdusLogo from "../assets/marketingodus.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navItemsLeft = [
  { name: "HOME", href: "/" },
  { name: "BLOG", href: "/blog" },
  { name: "SERVICES", href: "/services" },
];

const navItemsRight = [
  { name: "ABOUT", href: "/about" },
  { name: "CAREERS", href: "/careers" },
  { name: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("#")) return false;
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <nav className="bg-[#121217] md:rounded-lg text-white w-full px-4 py-3 sticky top-0 z-50 md:top-14 max-w-[99%] xl:max-w-[60%] mx-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
          <div className="hidden md:flex space-x-8">
            {navItemsLeft.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-semibold text-xl transition ${
                  isActive(item.href)
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-300"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex-shrink-0">
            <a href="/">
              <img
                className="h-20 w-auto"
                src={marketingOdusLogo}
                alt="MarketingOdus"
              />
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItemsRight.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-semibold text-xl transition ${
                  isActive(item.href)
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-300"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-2xl"
              aria-label="Open Menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed top-0 left-0 right-0 h-[70vh] bg-[#121217] z-[60] md:hidden px-6 pt-6 flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <button
                className="absolute top-6 right-6 text-3xl"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <FaTimes />
              </button>

              {[...navItemsLeft, ...navItemsRight].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xl transition ${
                    isActive(item.href)
                      ? "text-yellow-300 font-bold"
                      : "hover:text-yellow-300"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>

            <motion.div
              className="fixed top-[70vh] left-0 w-full h-[30vh] bg-black/60 z-[50] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
