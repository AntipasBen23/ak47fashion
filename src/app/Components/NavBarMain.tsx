'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiSearch, FiHeart, FiUser, FiShoppingBag } from 'react-icons/fi';
import MegaMenu from './MegaMenu/MegaMenu';

export default function NavBarMain() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <div className="relative bg-white w-full h-[70px] flex items-center px-[60px] justify-between text-[#000000]">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <Image src="/logo.png" alt="AK47Fashion Logo" width={40} height={40} />
      </div>

      {/* Center: Nav Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[calc(100%+12rem)] flex items-center justify-center">
        <div className="relative h-full flex items-center space-x-12 font-bold text-sm uppercase tracking-wide">
          {['Women', 'Men', 'Accessories'].map((label) => (
            <div
              key={label}
              className="relative h-full flex flex-col justify-center items-center"
              onMouseEnter={() => setActiveMenu(label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link href="#" className="hover:underline">{label}</Link>
              {/* Underline on hover */}
              {activeMenu === label && (
                <span className="absolute bottom-0 w-8 h-[2px] bg-black transition-all duration-300" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Icons */}
      <div className="flex space-x-8 text-xl">
        <button className="hover:text-gray-600" aria-label="Search"><FiSearch /></button>
        <button className="hover:text-gray-600" aria-label="Wishlist"><FiHeart /></button>
        <button className="hover:text-gray-600" aria-label="Account"><FiUser /></button>
        <button className="hover:text-gray-600" aria-label="Cart"><FiShoppingBag /></button>
      </div>

      {/* Mega Menu Dropdown (Only for Men) */}
      <MegaMenu isVisible={activeMenu === 'Women'} />
    </div>
  );
}
