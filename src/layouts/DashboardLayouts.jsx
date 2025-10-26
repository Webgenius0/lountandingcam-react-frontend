import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router";
import { IoMenu } from "react-icons/io5";

import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../components/ui/sheet";

import SmallBookSvg from "../components/svg/SmallBookSvg";
import SmallArtSvg from "../components/svg/SmallArtSvg";
import SmallFianceSvg from "../components/svg/SmallFianceSvg";
import SettingSvg from "../components/svg/SettingSvg";
import LogOutSvg from "../components/svg/LogOutSvg";
import { toast } from "sonner";
import DownArrowSvg from "../components/svg/DownArrowSvg";
import { FcBusinessman } from "react-icons/fc";
import LogoutConfirmModal from "../components/common/LogoutConfirmModal";

export default function DashboardLayouts() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleSetting = () => {
    toast.success("This feature is currently under development.");
  };

  const handleLogout = () => {
     setOpen(false);
    navigate("/auth/sign-in");

    toast.success("Sign Out successfully.", {
      className: "bg-primary",
    });
  };

  //   dynamic page title
  const getPageTitle = () => {
    if (location.pathname === "/dashboard") return "Journaling";
    if (location.pathname.includes("fashion")) return "Fashion";
    if (location.pathname.includes("finance")) return "Finance";
    if (location.pathname.includes("creative-design")) return "Creative Design";
    if (location.pathname.includes("profile")) return "Profile Settings";
    return "Dashboard";
  };

  // sidebar links
  const SidebarContent = () => (
    <div className="flex flex-col justify-between h-full py-5">
      <ul className="space-y-2 font-medium">
        <Link to="/" className="flex items-center mb-6 px-6 gap-2">
          <h2 className="text-xl text-primary font-semibold">
            Beaute Enterprise
          </h2>
        </Link>

        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 p-3 border-2 border-secondary  mx-4  ${
                isActive
                  ? "bg-secondary/50   border-2 rounded-sm"
                  : "hover:bg-secondary/50 border-transparent rounded-sm duration-300"
              }`
            }
            end
          >
            <SmallBookSvg /> Journaling
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/fashion"
            className={({ isActive }) =>
              `flex items-center gap-2 p-3 border-2 border-pink-100  mx-4  ${
                isActive
                  ? "bg-[#fdf5f8]  border-2 rounded-sm"
                  : "hover:bg-[#fdf5f8] border-transparent rounded-sm duration-300"
              }`
            }
            end
          >
            <SmallArtSvg /> Fashion
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/finance"
            className={({ isActive }) =>
              `flex items-center gap-2 border-2 border-blue-100 p-3  mx-4  ${
                isActive
                  ? "bg-[#f8fbfd]  border-2 rounded-sm"
                  : "hover:bg-[#f8fbfd] border-transparent rounded-sm duration-300"
              }`
            }
            end
          >
            <SmallFianceSvg />
            Finance
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/creative-design"
            className={({ isActive }) =>
              `flex items-center gap-2 border-2 border-orange-100 p-3  mx-4  ${
                isActive
                  ? "bg-[#fef9f9]  border-2 rounded-sm"
                  : "hover:bg-[#fef9f9] border-transparent rounded-sm duration-300"
              }`
            }
            end
          >
            <SmallArtSvg /> Creative Design
          </NavLink>
        </li>
      </ul>

      <div>
        <NavLink
          to="/dashboard/profile"
          className=" mb-2 cursor-pointer justify-between mx-3 rounded bg-accent hover:bg-secondary duration-300 ease-in-out py-3 px-4  flex gap-2 items-center"
        >
          <span className="flex gap-2 items-center">
            <FcBusinessman size={24} /> Noor H. Forhad
          </span>
          <DownArrowSvg />
        </NavLink>
        <div
          onClick={() => setOpen(true)}
          className=" mb-6 cursor-pointer justify-between mx-3 rounded bg-accent hover:bg-secondary duration-300 ease-in-out py-3 px-4  flex gap-2 items-center"
        >
          Log Out
          <LogOutSvg />
        </div>
         <LogoutConfirmModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleLogout}
      />
      </div>
    </div>
  );

  return (
    <div className="w-full flex h-screen">
      {/* sidebar */}
      <div className="bg-white border-2 w-[280px] hidden xl:block h-screen ">
        <SidebarContent />
      </div>

      <main className="flex-1 lg:w-[calc(100%-300px)]  flex flex-col overflow-y-hidden">
        {/* top bar */}
        <header className="sticky top-0 z-30  bg-white border-b shadow-sm flex justify-between items-center px-6 py-4 md:py-5">
          <h3 className="text-[16px] md:text-xl lg:text-4xl font-semibold text-gray-800">
            {getPageTitle()}
          </h3>

          <div className="flex items-center ">
            <button onClick={handleSetting} className="bg-gray-100 p-2 rounded">
              <SettingSvg />
            </button>
            <Sheet>
              <SheetTrigger className="p-0 md:ml-5 px-0!" asChild>
                <Button className="xl:hidden hover:bg-secondary p-0 cursor-pointer  bg-white rounded-none ">
                  <IoMenu className="size-7!" color="black" size={24} />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="p-0 w-[280px] pt-10  border-none "
              >
                <SidebarContent />
              </SheetContent>
            </Sheet>
          </div>
        </header>
        {/*  content */}
        <section className="flex-1 bg-gray-100 overflow-y-auto p-6">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
