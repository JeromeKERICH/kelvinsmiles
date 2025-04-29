// src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional, nice icons

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
  <div className="max-w-7xl mx-auto flex items-center justify-between 
                  px-[4%] py-2 
                  md:px-[10%] md:py-5">
                  
    {/* Logo */}
    <Link to="/" className="text-2xl font-bold text-gray-800">
      KS <span
        className="text-[1.25rem] font-medium text-indigo-600"
      >
      <span>Photography</span>
      </span>
    </Link>

    {/* Desktop Nav */}
    <nav className="hidden md:flex space-x-8">
      <Link to="/" className="text-gray-600 hover:text-black transition">Home</Link>
      <Link to="/portfolio" className="text-gray-600 hover:text-black transition">Portfolio</Link>
      <Link to="/about" className="text-gray-600 hover:text-black transition">About</Link>
      <Link to="/contact" className="text-gray-600 hover:text-black transition">Contact</Link>
    </nav>

    {/* Mobile Menu Button */}
    <button onClick={toggleMenu} className="md:hidden text-gray-700">
      {menuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>

  {/* Mobile Nav */}
  {menuOpen && (
    <div className="md:hidden bg-white shadow-md">
      <nav className="flex flex-col items-center space-y-4 py-4">
        <Link to="/" className="text-gray-600 hover:text-black transition" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/portfolio" className="text-gray-600 hover:text-black transition" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link to="/about" className="text-gray-600 hover:text-black transition" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" className="text-gray-600 hover:text-black transition" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
    </div>
  )}  
</header>

  );
}

export default Header;
