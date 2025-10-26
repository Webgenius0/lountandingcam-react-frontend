import React from 'react'
import { NavLink, Outlet } from 'react-router'
import LockSvg from '../../../components/svg/LockSvg'
import NotificationSvg from '../../../components/svg/NotificationSvg'
import HelpSvg from '../../../components/svg/HelpSvg'

export default function Setting() {
  return (
     <div className=" flex gap-6 items-start">
      {/* menu bar */}
      <div className="bg-white w-[280px] rounded-xl p-4 border ">
        <ul className="space-y-2 font-medium">
          <li>
            <NavLink
              to="/dashboard/profile/setting"
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 border-2    ${
                  isActive
                    ? "bg-gray-100   border-2 rounded-sm"
                    : "hover:bg-gray-100 border-transparent rounded-sm duration-300"
                }`
              }
              end
            >
              <LockSvg/>
             Change Password
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/profile/setting/notification"
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 border-2   ${
                  isActive
                    ? "bg-gray-100 border-2 rounded-sm"
                    : "hover:bg-gray-100 border-transparent rounded-sm duration-300"
                }`
              }
              end
            >
              <NotificationSvg />
             Notification
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/profile/setting/help-support"
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 border-2   ${
                  isActive
                    ? "bg-gray-100 border-2 rounded-sm"
                    : "hover:bg-gray-100 border-transparent rounded-sm duration-300"
                }`
              }
              end
            >
              <HelpSvg/>
            Help & Support
            </NavLink>
          </li>
        </ul>
      </div>

      {/* outlet  */}
      <div className="bg-white w-full rounded-xl p-4 border">
        <Outlet/>
      </div>
    </div>
  )
}
