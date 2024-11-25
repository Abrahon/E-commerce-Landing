"use client"

import Image from "next/image";
// components/Navbar.js
import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import logo from '../Assets/Assets/logo.png';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  return (
    <nav className="flex items-center justify-between p-4 text-gray shadow-md">
      {/* Left: Project Name */}
      <div>
        <Link href="/" className="text-xl font-bold">
          <Image src={logo} width={161} height={40} alt="logo"></Image>
        </Link>
      </div>

      {/* Middle: Navigation Options */}
      <div className="hidden md:flex gap-6">
        <Link href="/" className="hover:text-voilet-400">
          Home
        </Link>
        <Link href="/shop/:id" className="hover:voilet-400">
          Shop
        </Link>
        <Link href="/deals" className="hover:text-voilet-400">
          Deals
        </Link>
        <Link href="/newProduct" className="hover:text-voilet-400">
          Whats'New
        </Link>
      </div>

      {/* Right: Search Bar & Icons */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
      <div className="relative w-full max-w-xs">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
        />
        <div className="absolute left-3 top-2/4 transform -translate-y-2/4">
          <FaSearch className="text-gray-400" />
        </div>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 ml-4">
        {/* Cart Icon */}
        <div className="relative">
          <FaShoppingBag className="text-gray-700 text-xl" />
          {cartItems > 0 && (
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              {cartItems}
            </span>
          )}
        </div>

        {/* User Icon */}
        <FaUser className="text-gray-700 text-xl" />
      </div>
      </div>
    </nav>
  );
};

export default Navbar;



