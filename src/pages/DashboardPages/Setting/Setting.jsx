import React from 'react'
import { NavLink, Outlet } from 'react-router'
import LockSvg from '../../../components/svg/LockSvg'
import NotificationSvg from '../../../components/svg/NotificationSvg'
import HelpSvg from '../../../components/svg/HelpSvg'
import DeleteSvg from '../../../components/svg/DeleteSvg'

export default function Setting() {

  
  return (
     <div className=" flex flex-col lg:flex-row gap-6 items-start">

      {/* mobile menu bar */}
          <div className="w-full mx-auto px-2 lg:hidden border-b-2 border-gray-200">
        <ul className="flex items-center *:text-[12px] *:text-gray-600 justify-between font-medium">
          <li className="w-full flex-1">
            <NavLink
              to="/dashboard/profile/setting"
              end
              className={({ isActive }) =>
                `relative flex items-center justify-center p-1 before:absolute before:bottom-0  before:h-[3px] before:w-0 before:bg-primary before:transition-all before:duration-300 ${
                  isActive ? "before:w-full" : ""
                }`
              }
            >
              Change Password
            </NavLink>
          </li>
     
          <li className="w-full flex-1 place-c">
            <NavLink
              to="/dashboard/profile/setting/help-support"
              end
              className={({ isActive }) =>
                `relative flex items-center p-1 justify-center before:absolute before:bottom-0  before:h-[3px] before:w-0 before:bg-primary before:transition-all before:duration-300 ${
                  isActive ? "before:w-full" : ""
                }`
              }
            >
               Help & Support
            </NavLink>
          </li>
           
          <li className="w-full flex-1 place-c">
            <NavLink
              to="/dashboard/profile/setting/delete-account"
              end
              className={({ isActive }) =>
                `relative flex items-center p-1 justify-center before:absolute before:bottom-0  before:h-[3px] before:w-0 before:bg-primary before:transition-all before:duration-300 ${
                  isActive ? "before:w-full" : ""
                }`
              }
            >
               Delete Account
            </NavLink>
          </li>
        </ul>
      </div>

      



      {/* desktop menu bar */}
      <div className="bg-white w-[280px] hidden lg:block rounded-xl p-4 border ">
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

          
          <li>
            <NavLink
              to="/dashboard/profile/setting/delete-account"
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 border-2   ${
                  isActive
                    ? "bg-gray-100 border-2 rounded-sm"
                    : "hover:bg-gray-100 border-transparent rounded-sm duration-300"
                }`
              }
              end
            >
              <DeleteSvg />
            Delete Account
            </NavLink>
          </li>
        </ul>
      </div>

      {/* outlet  */}
      <div className="bg-white w-full rounded-xl p-2 lg:p-4  border">
        <Outlet/>
      </div>
    </div>
  )
}
