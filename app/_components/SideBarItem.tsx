"use client";

import { IconDescriptor } from "next/dist/lib/metadata/types/metadata-types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface SideBarItemProps {
  icon: ReactNode;
  label: string;
  link?: string;
}

function SideBarItem({ icon, label, link = "/" }: SideBarItemProps) {
  const pathName = usePathname();
  const isActive = pathName.startsWith(link);

  const activeLink = isActive
    ? "text-white font-bold text-lg"
    : "text-white text-lg";

  return (
    <Link
      href={link}
      className="flex cursor-pointer hover:bg-white hover:bg-opacity-15 py-2 mt-3 rounded-md transition-all px-2 duration-500 items-center gap-3 w-full"
    >
      <div className="text-black">{icon}</div>
      <p className={activeLink}>{label}</p>
    </Link>
  );
}

export default SideBarItem;
