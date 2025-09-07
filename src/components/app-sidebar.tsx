import * as React from "react";
import logo from "../../public/logo.svg";
import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="w-[275px]">
      <SidebarHeader className="flex items-center justify-center">
        <img className="w-40" src={logo} alt="pic" />
      </SidebarHeader>
      <SidebarContent className="">
        <div className="mt-6">
          <NavMain />
          {/* <NavProjects projects={data.projects} /> */}
        </div>
      </SidebarContent>

      <SidebarRail />
      <SidebarFooter className="mb-10 cursor-pointer">
        <div className="flex items-start ml-6">
          <Link
            to="/login"
            className="flex justify-center  items-center gap-3 font-semibold text-white"
          >
            <LogOut className="w-5 h-5" />
            <button className=" cursor-pointer">Logout</button>
          </Link>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
