"use client"

import UserDropDown from './UserDropDown'
import { Button } from '@/components/ui/button'
import { RiMenu4Fill } from "react-icons/ri";
import ThemeSwitch from './themeSwitch';
import { useSidebar } from '@/components/ui/sidebar';

function TopBar() {
    const {toggleSidebar}= useSidebar()
  return (
    <div className='fixed border h-14 w-full top-0 left-0 z-30 md:ps-72 md:pe-8 flex justify-between items-center bg-white dark:bg-card px-5'>
      <div>sesch</div>
      <div className='flex items-center gap-2'>
        <ThemeSwitch/>
         <UserDropDown/>
         <Button onClick={toggleSidebar} type="button" size="icon" className="ms-2 md:hidden ">
              <RiMenu4Fill/>
         </Button>
      </div>
    </div>
  )
}

export default TopBar
