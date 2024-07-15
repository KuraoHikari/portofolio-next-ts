"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import links from "@/app/navroute";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`${
            link.href === pathname && "text-blue-400 border-b-2 border-blue-400"
          } capitalize font-medium hover:text-blue-400 transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
