import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Logo</Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/shop" className="hover:text-gray-400">Shop</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
