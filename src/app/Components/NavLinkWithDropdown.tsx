'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type MenuSection = {
  title: string;
  items: {
    name: string;
    href: string;
  }[];
};

type NavLinkWithDropdownProps = {
  title: string;
  sections: MenuSection[];
  href: string;
};

export default function NavLinkWithDropdown({ title, sections, href }: NavLinkWithDropdownProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link 
        href={href} 
        className={`h-full flex items-center hover:underline ${isHovered ? 'relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-black' : ''}`}
      >
        {title}
      </Link>
      
      {isHovered && (
        <div className="absolute top-full left-0 right-0 transform -translate-x-1/2 w-screen bg-white shadow-md z-50 py-8">
          <div className="container mx-auto px-[60px]">
            <div className="grid grid-cols-6 gap-12 max-w-6xl">
              {sections.map((section, index) => (
                <div key={index} className="min-w-[150px]">
                  <h3 className="font-bold text-sm uppercase mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link href={item.href} className="text-sm text-gray-700 hover:text-black hover:underline">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}