"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Always highlight "Careers" on the subdomain
  useEffect(() => {
    // nothing dynamic here
  }, []);

  const navStyles =
    "bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm";

  const linkStyles = "text-gray-700 hover:text-cyan-600";

  const navLinks = [
    { name: "Home", href: "https://vyomanexgen.com" },
    { name: "Services", href: "https://vyomanexgen.com/#services-section" },
    { name: "Portfolio", href: "https://vyomanexgen.com/#portfolio-section" },
    { name: "Careers", href: "https://careers.vyomanexgen.com" },
    { name: "Testimonials", href: "https://vyomanexgen.com/#testimonials-section" },
    { name: "Contact", href: "https://vyomanexgen.com/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-5 flex items-center justify-between transition-all duration-500 ${navStyles}`}
    >
      {/* Logo */}
      <div className="h-14 w-60 flex items-center">
        <img src="/vyomanexgen (1).png" alt="Vyomanexgen Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <ul className="flex items-center gap-8 font-semibold">
          {navLinks.map((item) => (
            <li key={item.href} className="group">
              <a
                href={item.href}
                className={`relative pb-1 transition-all ${
                  item.name === "Careers"
                    ? "text-cyan-500 drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]"
                    : linkStyles
                }`}
              >
                {item.name}

                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] w-full bg-cyan-500 rounded-full transition-all
                    ${item.name === "Careers" ? "scale-x-100 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]" : "scale-x-0 group-hover:scale-x-100"}
                  `}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right-side Buttons */}
        <div className="flex items-center gap-4">
          <motion.a
            href="tel:+917358105293"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-md text-white font-semibold shadow-md"
          >
            <FaPhoneAlt size={16} />
            Call
          </motion.a>

          <motion.a
            href="https://wa.me/917358105293?text=Hello%20Vyomanexgen%2C%20I%20want%20to%20know%20more."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-md text-white font-semibold shadow-md"
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </motion.a>
        </div>
      </div>

      {/* Mobile trigger */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 text-cyan-400 hover:bg-white/20 transition"
      >
        Menu
      </button>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 right-0 w-full h-screen flex flex-col p-6 pt-14 bg-white md:hidden"
          >
            {/* Top bar */}
            <div className="w-full flex justify-between items-center">
              <div className="h-12 w-30 flex items-center">
                <img src="/vyomanexgen (1).png" alt="Vyomanexgen Logo" />
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-cyan-400 text-lg px-4 py-2"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <ul className="flex flex-col items-center gap-6 text-2xl font-semibold mt-4 mb-6">
              {navLinks.map((item) => (
                <li key={item.href} className="group">
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`relative transition-all ${
                      item.name === "Careers"
                        ? "text-cyan-500"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* WhatsApp & Call (mobile) */}
            <div className="flex flex-col items-center gap-4 mb-10 w-full">
              <motion.a
                href="https://wa.me/917358105293?text=Hello%20Vyomanexgen%2C%20I%20want%20to%20know%20more."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-green-500 px-4 py-2 rounded-md text-white font-semibold shadow-md justify-center w-[70%] max-w-[260px]"
              >
                <FaWhatsapp size={20} />
                WhatsApp
              </motion.a>

              <motion.a
                href="tel:+917358105293"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-md text-white font-semibold shadow-md justify-center w-[70%] max-w-[260px]"
              >
                <FaPhoneAlt size={18} />
                Call
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
