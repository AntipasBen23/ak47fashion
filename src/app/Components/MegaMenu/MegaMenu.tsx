'use client';

import { womenMenu } from './women';

export default function MegaMenu({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow z-50 py-6 px-[60px]">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
        {womenMenu.map((section, index) => (
          <div key={index}>
            <h4 className="font-bold text-sm mb-2">{section.heading}</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              {section.items.map((item, idx) => (
                <li key={idx} className="hover:underline cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
