'use client'

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
    <div className="bg-gray-100 w-full text-sm text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-end space-x-4">
        <div className="flex items-center space-x-1 cursor-pointer hover:underline">
          <span className="text-xl">👤</span>
          <a href="#" className="hover:underline">Account</a>
        </div>

        <span>|</span>
        <a href="#" className="hover:underline">Accessibility Statement</a>

        <span>|</span>
        <a href="#" className="hover:underline">Help</a>

        <span>|</span>
        <a href="#" className="hover:underline">Email Sign Up</a>

        <span>|</span>
        <a href="#" className="hover:underline">Blog</a>

        <span>|</span>

        <select
          value={selectedCountry.code}
          onChange={(e) =>
            setSelectedCountry(
              countries.find(c => c.code === e.target.value) || countries[0]
            )
          }
          className="bg-transparent outline-none"
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
