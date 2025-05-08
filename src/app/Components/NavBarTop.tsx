'use client';

import { useState } from 'react';

const countries = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
];

export default function NavBarTop() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className="bg-[#ebebeb] w-full text-sm text-[#53565A] font-sans h-[50px]">
      <div className="flex items-center justify-end px-[60px] h-full space-x-4">
        <div className="flex items-center space-x-1 cursor-pointer hover:underline">
          <span className="text-xl">👤</span>
          <a href="#" className="hover:underline">Account</a>
        </div>

        {/* Vertical divider */}
        <div className="border-l h-full border-gray-400" />

        <a href="#" className="hover:underline">Accessibility Statement</a>

        <div className="border-l h-full border-gray-400" />

        <a href="#" className="hover:underline">Help</a>

        <div className="border-l h-full border-gray-400" />

        <a href="#" className="hover:underline">Email Sign Up</a>

        <div className="border-l h-full border-gray-400" />

        <a href="#" className="hover:underline">Blog</a>

        <div className="border-l h-full border-gray-400" />

        <select
          value={selectedCountry.code}
          onChange={(e) =>
            setSelectedCountry(
              countries.find(c => c.code === e.target.value) || countries[0]
            )
          }
          className="bg-transparent outline-none cursor-pointer"
        >
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.flag} {country.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
