import React, { useState } from "react";
import { Link } from "react-router-dom";
import Items from "./Items";
import { Menu, X } from "lucide-react"; // You can use any icon library

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 z-50 bg-sky-950 text-white shadow-md text-xl w-full">
      <div className="flex justify-between items-center px-6 lg:px-10 py-4">

        {/* Left - Brand Name */}
        <Link to="/">
          <span className="font-bold text-white text-2xl hover:text-cyan-300 transition cursor-pointer">
            Vignesh R
          </span>
        </Link>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4">
          <Items title="Home" link="/" />
          <Items title="Projects" link="/project" />
          <Items title="Certifications" link="/certifications" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-4 flex flex-col space-y-3">
          <Items title="Home" link="/" />
          <Items title="Projects" link="/project" />
          <Items title="Certifications" link="/certifications" />
        </div>
      )}
    </div>
  );
}

export default Navbar;
