"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
type NavLinkProps = React.ComponentProps<typeof Link> & {
  activeClassName?: string;
  className?: string;
};
export default function NavLink({
  activeClassName,
  className,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = props.href === pathname;
  return <Link className={isActive ? activeClassName : className} {...props} />;
}
