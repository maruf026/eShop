import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar,AvatarFallback,  AvatarImage } from "@/components/ui/avatar"
import favicon from '@/public/assets/favicon.png'
import { IoShirtOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import Link from "next/link";

function UserDropDown() {
  return (
   <DropdownMenu>
  <DropdownMenuTrigger>
    <Avatar>
  <AvatarImage src={favicon.src}/>
  {/* <AvatarFallback>eShop</AvatarFallback> */}
</Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="me-5 w-44">
    <DropdownMenuLabel>
        <p className="font-semibold ">from redux(do it later)</p>
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem asChild>
        <Link href="">
        <IoShirtOutline/>
        New Product</Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
        <Link href="">
        <MdOutlineShoppingBag/>
        Orders</Link>
    </DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default UserDropDown
