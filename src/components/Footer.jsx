// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react"; // optional icons

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side: Logo/Name */}
        <div className="text-lg font-semibold mb-4 md:mb-0">
          © {new Date().getFullYear()} Kevin Smiles. All rights reserved.
        </div>

        {/* Middle: Navigation Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <Link to="/portfolio" className="hover:text-black transition">Portfolio</Link>
          <Link to="/about" className="hover:text-black transition">About</Link>
          <Link to="/contact" className="hover:text-black transition">Contact</Link>
        </div>

        {/* Right side: Social media */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
            <Facebook size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
            <Instagram size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
