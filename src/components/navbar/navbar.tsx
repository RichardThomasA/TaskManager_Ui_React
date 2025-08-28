
"use client";
import React, { useState } from 'react';

type NavbarLink = {
  label: string;
  href: string;
  children?: NavbarLink[];
};

type NavbarProps = {
  links: NavbarLink[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleMouseEnter = (idx: number) => {
    setOpenIndex(idx);
  };
  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  return (
    <nav className="w-full bg-gray-100 p-4 mb-4 flex items-center" role="navigation">
      {/* Static logo on the left */}
      <a href="/" className="mr-4 flex items-center" aria-label="Home">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-600"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 12l2 2l4-4" />
        </svg>
      </a>
      <ul className="flex gap-4 ml-2">
        {links.map((link, idx) => (
          <li
            key={link.href}
            className="relative"
            onMouseEnter={() => link.children && handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={link.href}
              className="font-bold text-gray-800 hover:text-blue-600 transition-colors px-2 py-1"
              aria-haspopup={!!link.children}
              aria-expanded={openIndex === idx}
            >
              {link.label}
            </a>
            {link.children && openIndex === idx && (
              <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded z-10 min-w-[120px]">
                {link.children.map((child) => (
                  <li key={child.href}>
                    <a
                      href={child.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;