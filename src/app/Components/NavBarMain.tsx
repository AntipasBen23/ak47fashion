'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiHeart, FiUser, FiShoppingBag } from 'react-icons/fi';
import NavLinkWithDropdown from './NavLinkWithDropdown';

// Data for dropdown menus
const womenMenuData = [
  {
    title: "TRENDING",
    items: [
      { name: "New Product Drops", href: "#" },
      { name: "Graphics", href: "#" },
      { name: "Matching Gym Sets", href: "#" },
      { name: "Brown Workout Sets", href: "#" },
      { name: "Running", href: "#" },
      { name: "Strong Looks, Stronger Lifts", href: "#" }
    ]
  },
  {
    title: "PRODUCTS",
    items: [
      { name: "All Products", href: "#" },
      { name: "Leggings", href: "#" },
      { name: "T-Shirts & Tops", href: "#" },
      { name: "Sports Bras", href: "#" },
      { name: "Shorts", href: "#" },
      { name: "Hoodies & Sweatshirts", href: "#" },
      { name: "Gym Jackets", href: "#" },
      { name: "Joggers", href: "#" },
      { name: "Tank Tops", href: "#" },
      { name: "Crop Tops", href: "#" },
      { name: "Unitards", href: "#" },
      { name: "Underwear & Basics", href: "#" },
      { name: "Outerwear", href: "#" }
    ]
  },
  {
    title: "LEGGINGS",
    items: [
      { name: "All Leggings", href: "#" },
      { name: "High-Waisted Leggings", href: "#" },
      { name: "Scrunch Bum Leggings", href: "#" },
      { name: "Seamless Leggings", href: "#" },
      { name: "Black Leggings", href: "#" },
      { name: "Leggings With Pockets", href: "#" }
    ]
  },
  {
    title: "EXPLORE",
    items: [
      { name: "Coming Soon", href: "#" },
      { name: "Leggings Guide", href: "#" },
      { name: "Sports Bra Guide", href: "#" },
      { name: "Modest Hub", href: "#" }
    ]
  },
  {
    title: "ACCESSORIES",
    items: [
      { name: "All Accessories", href: "#" },
      { name: "E-Gift Card", href: "#" }
    ]
  },
  {
    title: "LAST CHANCE",
    items: [
      { name: "For Less", href: "#" }
    ]
  }
];

const menMenuData = [
  {
    title: "TRENDING",
    items: [
      { name: "New Arrivals", href: "#" },
      { name: "Best Sellers", href: "#" },
      { name: "Workout Sets", href: "#" }
    ]
  },
  {
    title: "PRODUCTS",
    items: [
      { name: "All Products", href: "#" },
      { name: "T-Shirts", href: "#" },
      { name: "Shorts", href: "#" },
      { name: "Hoodies & Sweatshirts", href: "#" },
      { name: "Joggers", href: "#" },
      { name: "Tank Tops", href: "#" },
      { name: "Underwear", href: "#" },
      { name: "Outerwear", href: "#" }
    ]
  },
  {
    title: "EXPLORE",
    items: [
      { name: "Coming Soon", href: "#" },
      { name: "Fit Guide", href: "#" }
    ]
  }
];

const accessoriesMenuData = [
  {
    title: "ACCESSORIES",
    items: [
      { name: "All Accessories", href: "#" },
      { name: "Bags", href: "#" },
      { name: "Water Bottles", href: "#" },
      { name: "Hats", href: "#" },
      { name: "Socks", href: "#" },
      { name: "Gift Cards", href: "#" }
    ]
  }
];

export default function NavBarMain() {
  return (
    <div className="relative bg-white w-full h-[90px] flex items-center px-[60px] justify-between text-[#000000] border-b">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <Image src="/logo.png" alt="AK47Fashion Logo" width={40} height={40} />
      </div>
      
      {/* Center: Nav Links with absolute centering and background extension */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[calc(100%+12rem)] flex items-center justify-center">
        <div className="relative h-full flex items-center space-x-12 font-bold text-sm uppercase tracking-wide">
          {/* background filler */}
          <span className="absolute top-0 left-[-2.5rem] w-[calc(100%+5rem)] h-full block" />
          
          <NavLinkWithDropdown title="Women" sections={womenMenuData} href="/women" />
          <NavLinkWithDropdown title="Men" sections={menMenuData} href="/men" />
          <NavLinkWithDropdown title="Accessories" sections={accessoriesMenuData} href="/accessories" />
        </div>
      </div>
      
      {/* Right: Icons */}
      <div className="flex space-x-8 text-xl">
        <button className="hover:text-gray-600" aria-label="Search"><FiSearch /></button>
        <button className="hover:text-gray-600" aria-label="Wishlist"><FiHeart /></button>
        <button className="hover:text-gray-600" aria-label="Account"><FiUser /></button>
        <button className="hover:text-gray-600" aria-label="Cart"><FiShoppingBag /></button>
      </div>
    </div>
  );
}