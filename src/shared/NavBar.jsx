import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerClose,
} from "@/components/ui/drawer";
import PrimaryBtn from "../components/common/PrimaryBtn";
import SecondaryBtn from "../components/common/SecondaryBtn";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/#about-section", label: "About" },
    { to: "/journaling", label: "Journaling" },
    { to: "/fashion", label: "Fashion" },
    { to: "/finance", label: "Finance" },
    { to: "/creative-design", label: "Creative Design" },
    { to: "#contact-section", label: "Contact" },
  ];

  //  scroll function
  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header className="w-full ">
      <div className="2xl:max-w-9/12 bg-white rounded-full px-6 max-w-11/12 mx-auto py-4 shadow-xs flex justify-between items-center">
        {/* logo */}
        <Link to="/" className="text-xl font-semibold text-primary">
          Beaute Enterprise
        </Link>

        {/* desktop nav */}
        <nav className="hidden xl:flex justify-between items-center space-x-6">
          {navLinks.map((link) =>
            link.to.startsWith("#") ? (
              <button
                key={link.label}
                onClick={() => handleScroll(link.to)}
                className=" text-gray-600 cursor-pointer hover:text-black"
              >
                {link.label}
              </button>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  ` ${
                    isActive
                      ? `${
                          link.label === "About"
                            ? "text-gray-600 hover:text-black"
                            : "text-primary border-b-2 border-primary font-medium"
                        }`
                      : "text-gray-600 hover:text-black"
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        {/* desktop buttons */}
        <div className="hidden xl:flex gap-4 items-center">
          <Link
            className="hover:text-primary font-semibold duration-300 ease-in-out"
            to="/auth/sign-in"
          >
            Log In
          </Link>
          <PrimaryBtn text="Sign Up" to="/auth/sign-up" />
        </div>

        {/* mobile drawer */}
        <Drawer open={open} onOpenChange={setOpen} direction="left">
          <DrawerTrigger asChild>
            <button className="xl:hidden hover:scale-105 duration-300 text-gray-800">
              <Menu color="#6e5084" className="h-6 w-6" />
            </button>
          </DrawerTrigger>

          <DrawerContent className="h-full w-3/4 sm:w-1/2 bg-white fixed left-0 top-0 rounded-none">
            <DrawerHeader className="flex items-end justify-end ">
              <DrawerClose asChild>
                <button className="text-gray-700 p-2">
                  <X className="h-5 w-5" />
                </button>
              </DrawerClose>
            </DrawerHeader>

            <nav className="flex flex-col justify-between h-full">
              <div className="flex flex-col p-5 pt-0 space-y-4">
                {navLinks.map((link) =>
                  link.to.startsWith("#") ? (
                    <button
                      key={link.label}
                      onClick={() => handleScroll(link.to)}
                      className="text-sm text-gray-700 hover:text-black text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className="text-sm text-gray-700 hover:text-black"
                    >
                      {link.label}
                    </NavLink>
                  )
                )}
              </div>

              <div className="flex flex-col p-5 pt-0 space-y-4">
                <PrimaryBtn
                  className="w-full"
                  text="Sign Up"
                  to="/auth/sign-up"
                />
                <SecondaryBtn
                  className="w-full"
                  text="Log In"
                  to="/auth/sign-in"
                />
              </div>
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
