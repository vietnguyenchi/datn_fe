import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Furniro</h2>
          <p className="text-sm">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/payment" className="hover:text-gray-400">Payment Options</a>
          <a href="/shop" className="hover:text-gray-400">Shop</a>
          <a href="/returns" className="hover:text-gray-400">Returns</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/privacy" className="hover:text-gray-400">Privacy Policies</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
          <a href="/help" className="hover:text-gray-400">Help</a>
        </nav>
        <div className="mt-4 md:mt-0">
          <form className="flex">
            <input type="email" placeholder="Subscribe to our newsletter" className="p-2 rounded-l-md border-2 border-gray-700 bg-gray-900 text-white" />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">Subscribe</button>
          </form>
        </div>
        <p className="text-center text-sm mt-4">2023 Furniro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
