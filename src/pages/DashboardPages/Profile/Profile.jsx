import React from "react";
import { NavLink, Outlet } from "react-router";
import ProfileSvg from "../../../components/svg/ProfileSvg";
import SettingSvg from "../../../components/svg/SettingSvg";

export default function Profile() {
  return (
    <div className=" flex gap-6 items-start">
      {/* menu bar */}
      <div
        className="bg-white w-[280px] rounded-xl p-4 border lg:min-h-[700px]"
      >
        <ul className="space-y-2 font-medium">
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
      <div className=" w-full ">
        <Outlet />
      </div>
    </div>
  );
}
