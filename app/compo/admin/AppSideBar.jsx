"use client"

import { Button } from "@/components/ui/button";
import { CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { adminAppSidebarMenu } from "@/lib/adminSideBarMenu";
import logo from "@/public/assets/logo.png";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { LuChevronRight } from "react-icons/lu";

function AppSideBar() {
    const {toggleSidebar}= useSidebar()
  return (
    <Sidebar className="z-50">
      <SidebarHeader className="border-b h-14 p-0">
        <div className="flex justify-between items-center px-4">
          <Image src={logo.src} height={50} width={150} alt="logo" />
          <Button onClick={toggleSidebar} type="button" size="icon" className="md:hidden">
             <IoMdClose className="h-5 w-5" />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-3">
        <SidebarMenu>
            {
                adminAppSidebarMenu.map((menu, i)=>(
                    <Collapsible key={i} className="group/collapsible"> 
                    <SidebarMenuItem>
                       <CollapsibleTrigger asChild>
                       <SidebarMenuButton asChild className="font-semibold py-5 px-2">
                        <Link href={menu?.url}>
                         <menu.icon/>
                         {menu.title}

                         {
                            menu.submenu && menu.submenu.length > 0 && 
                            <LuChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"/>
                         }
                        </Link>
                       </SidebarMenuButton>
                       </CollapsibleTrigger>
                       {
                        menu.submenu && menu.submenu.length > 0 &&
                        <CollapsibleContent>
                        <SidebarMenuSub>
                           {
                            menu.submenu.map((subItem, subindex)=>(
                                <SidebarMenuItem key={subindex}>
                                    <SidebarMenuSubButton asChild className=" py-5 px-2">
                                        <Link href={subItem.url}>{subItem.title}</Link>
                                    </SidebarMenuSubButton>
                                </SidebarMenuItem>
                            ))
                           }
                        </SidebarMenuSub>
                        </CollapsibleContent>
                       }
                    </SidebarMenuItem>
                    </Collapsible>
                ))
            }
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>

  );
}

export default AppSideBar;
