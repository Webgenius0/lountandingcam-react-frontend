import React from "react";
import { NavLink, Outlet } from "react-router";
import ProfileSvg from "../../../components/svg/ProfileSvg";
import SettingSvg from "../../../components/svg/SettingSvg";

export default function Profile() {
  return (
    <div className=" flex flex-col lg:flex-row gap-6 items-start">
      {/* mobile menu bar */}
      <div className="w-full px-2 lg:hidden border-b-2 border-gray-200">
        <ul className="flex items-center justify-between font-medium">
          <li className="w-full flex-1">
            <NavLink
              to="/dashboard/profile"
              end
              className={({ isActive }) =>
                `relative flex items-center justify-center p-1 before:absolute before:bottom-0 before:right-0 before:h-[3px] before:w-0 before:bg-primary before:transition-all before:duration-300 ${
                  isActive ? "before:w-full" : ""
                }`
              }
            >
              Profile Settings
            </NavLink>
          </li>

          <li className="w-full flex-1 place-c">
            <NavLink
              to="/dashboard/profile/setting"
              end
              className={({ isActive }) =>
                `relative flex items-center p-1 justify-center before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:bg-primary before:transition-all before:duration-300 ${
                  isActive ? "before:w-full" : ""
                }`
              }
            >
              Setting
            </NavLink>
          </li>
        </ul>
      </div>

      {/* desktop menu bar */}
      <div className="bg-white w-[280px] hidden lg:block  rounded-xl p-4 border lg:min-h-[700px]">
        <ul className="space-y-2  font-medium">
          <li>
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 border-2    ${
                  isActive
                    ? "bg-gray-100   border-2 rounded-sm"
                    : "hover:bg-gray-100 border-transparent rounded-sm duration-300"
                }`
              }
              end
            >
              <ProfileSvg />
              Profile Settings
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/profile/setting"
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 border-2   ${
                  isActive
                    ? "bg-gray-100 border-2 rounded-sm"
                    : "hover:bg-gray-100 border-transparent rounded-sm duration-300"
                }`
              }
              end
            >
              <SettingSvg />
              Setting
            </NavLink>
          </li>
        </ul>
      </div>

      {/* outlet  */}
      <div className=" w-full mb-20 ">
        <Outlet />
      </div>
    </div>
  );
}
