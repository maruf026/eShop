import AppSideBar from "@/app/compo/admin/AppSideBar";
import TopBar from "@/app/compo/admin/TopBar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "next-themes";

function layout({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <AppSideBar />
        <main className=" md:w-[calc(100vw-16rem)] ">
          <div className="px-8 min-h-[calc(100vh-40px)] pb-10 pt-[70px]">
            <TopBar />
            {children}
          </div>
          <div className="border-t h-[40px] flex justify-center items-center bg-gray-50 dark:bg-background text-sm">
            © 2025 eShop. All Rights Reserved
          </div>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default layout;
