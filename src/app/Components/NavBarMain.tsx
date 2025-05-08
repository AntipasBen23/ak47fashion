'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiHeart, FiUser, FiShoppingBag } from 'react-icons/fi';

export default function NavBarMain() {
  return (
    <div className="relative bg-white w-full h-[100px] flex items-center px-[60px] justify-between text-[#000000]">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <Image src="/logo.png" alt="AK47Fashion Logo" width={40} height={40} />
      </div>

      {/* Center: Nav Links with absolute centering and background extension */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[calc(100%+12rem)] flex items-center justify-center">
        <div className="relative h-full flex items-center space-x-12 font-bold text-sm uppercase tracking-wide">
          {/* background filler */}
          <span className="absolute top-0 left-[-2.5rem] w-[calc(100%+5rem)] h-full block" />

          <Link href="#" className="hover:underline">Women</Link>
          <Link href="#" className="hover:underline">Men</Link>
          <Link href="#" className="hover:underline">Accessories</Link>
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
