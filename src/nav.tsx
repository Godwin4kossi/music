import { useState } from "react";
import "./index.css";
import logo from './assets/images/newLogo.png';




export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow-md px-4 py-2">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between md:grid md:grid-cols-3">
        {/* Left: Logo */}
        <div className="flex w-full items-center justify-between col-span-1">
          <a href="#">
            <img className="w-20" src={logo} alt="Logo" />
          </a>

          {/* Hamburger - visible only on small screens */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="red"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Center: Nav Links (hidden on mobile) */}
        <div className="hidden md:flex justify-center col-span-1">
          <ul className="flex space-x-6 font-medium bg-gray-700 px-5 py-2 rounded-full">
            {["Home", "About", "Services", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-white px-3 py-2 rounded-full hover:bg-white hover:text-black transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Buttons (hidden on mobile) */}
        <div className="hidden md:flex justify-end items-center gap-3 col-span-1">
          <button className="bg-red-700 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-full transition">
            Click Me
          </button>
          <button className="border-2 border-red-900 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-2 px-4 rounded-full transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 text-center space-y-4">
          <ul className="bg-gray-700 px-5 py-4 rounded-xl space-y-2 font-medium">
            {["Home", "About", "Services", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="block py-2 px-3 text-white hover:bg-white hover:text-black rounded-full transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 items-center mt-3">
            <button className="bg-red-700 hover:bg-red-500 text-white font-semibold py-2 px-6 rounded-full">
              Click Me
            </button>
            <button className="border-2 border-red-900 text-red-600 hover:bg-red-600 hover:text-white font-semibold py-2 px-6 rounded-full">
              Learn More
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
