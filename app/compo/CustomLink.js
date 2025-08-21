"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

function CustomLink({path, children}) {
    let pathName = usePathname();
    let active= pathName== path;

  return (
   <Link className={active ? "text-yellow-500" : ""} href={path}>{children}</Link>
  )
}

export default CustomLink
