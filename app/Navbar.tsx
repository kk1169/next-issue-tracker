"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classNames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 bg-white border-b items-center border-gray-300 py-4 px-8">
      <Link href="/">
        <h2 className="font-bold text-lg inline-flex items-center gap-2">
          <AiFillBug />
          ISSUE TRACKER
        </h2>
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              className={classNames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-400": link.href !== currentPath,
                "font-medium hover:text-zinc-900 transition-colors": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
