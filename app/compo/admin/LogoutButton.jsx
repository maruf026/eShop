import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { AiOutlineLogout } from "react-icons/ai";


function LogoutButton() {
  return (
     <DropdownMenuItem  className="cursor-pointer">
        <AiOutlineLogout color="red" />
        Log Out
    </DropdownMenuItem>
  )
}

export default LogoutButton
