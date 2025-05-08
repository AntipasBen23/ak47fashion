'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiHeart, FiUser, FiShoppingBag } from 'react-icons/fi';

export default function NavBarMain() {
  return (
    <div className="bg-white w-full h-[60px] flex items-center px-[60px] justify-between text-[#000000]">
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <Image src="/logo.png" alt="AK47Fashion Logo" width={40} height={40} />
      </div>

      {/* Center: Nav Links */}
      <div className="flex space-x-10 text-sm font-bold uppercase tracking-wide">
        <Link href="#" className="hover:underline">Women</Link>
        <Link href="#" className="hover:underline">Men</Link>
        <Link href="#" className="hover:underline">Accessories</Link>
      </div>

      {/* Right: Icons */}
      <div className="flex space-x-6 text-xl">
        <button className="hover:text-gray-600" aria-label="Search"><FiSearch /></button>
        <button className="hover:text-gray-600" aria-label="Wishlist"><FiHeart /></button>
        <button className="hover:text-gray-600" aria-label="Account"><FiUser /></button>
        <button className="hover:text-gray-600" aria-label="Cart"><FiShoppingBag /></button>
      </div>
    </div>
  );
}
