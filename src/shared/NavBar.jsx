import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X, LogIn } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
    DrawerHeader,
    DrawerClose,
    DrawerTitle,
} from "@/components/ui/drawer";
import PrimaryBtn from "../components/common/PrimaryBtn";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/journaling", label: "Journaling" },
        { to: "/fashion", label: "Fashion" },
        { to: "/creative-design", label: "Creative Design" },
        { to: "/contact", label: "Contact" },
    ];

    return (
        <header className="w-full ">
            <div className="2xl:max-w-9/12 bg-white rounded-full  px-6  max-w-11/12 mx-auto py-4 shadow-xs flex justify-between items-center">

                {/* logo */}
                <Link to="/" className="flex flex-col items-start space-y-2">
                    <div className="flex items-center gap-2">
                        <span className=" text-xl  font-semibold text-primary">
                           Beaute Enterprise
                        </span>
                    </div>
                    
                </Link>

                {/* desktop nav */}
                <nav className="hidden xl:flex justify-between items-center space-x-3 2xl:space-x-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `text-sm ${isActive ? "text-primary border-b-2 border-primary font-medium" : "text-gray-600 hover:text-black"}`
                            }
                        >
                            {link.label}
                            {({ isActive }) =>
        isActive && (
          <span className="absolute left-1/2 -bottom-1 h-[3px] w-[10px] rounded-full bg-[#6E4ABF] transform -translate-x-1/2"></span>
        )
      }
                        </NavLink>
                    ))}


                </nav>

                
                    <div className="hidden xl:flex gap-4 items-center " >

                        <Link
                            to="/auth/log-in"
                        >
                            Login
                        </Link>

                        <PrimaryBtn text="Get Started" to="/register" />
                    </div>

                {/* mb drawer btn */}
                <Drawer open={open} onOpenChange={setOpen} direction="left">
                    <DrawerTrigger asChild>
                        <button className="xl:hidden hover:scale-105 duration-300 cursor-pointer text-gray-800">
                            <Menu className="h-6 w-6" />
                        </button>
                    </DrawerTrigger>

                    <DrawerContent className="h-full w-3/4 sm:w-1/2 bg-white fixed left-0 top-0  rounded-none">
                        <DrawerHeader className="flex items-end justify-end ">

                            <DrawerClose asChild>
                                <button className="text-gray-700  p-2">
                                    <X className="h-5 w-5" />
                                </button>
                            </DrawerClose>
                        </DrawerHeader>

                        <nav className="flex flex-col justify-between  h-full">

                            <div className="flex flex-col p-5 pt-0 space-y-4">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.to}
                                        to={link.to}
                                        onClick={() => setOpen(false)}
                                        className="text-sm text-gray-700 hover:text-black"
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                            </div>

                            <div className="flex flex-col p-5 pt-0 space-y-4" >
                                <PrimaryBtn className="w-full" text="Get Started" to="/register" />
                                <Link to="/log-in">
                                <button className="rounded-full p-2 border-2 border-primary hover:bg-secondary cursor-pointer duration-300  w-full text-primary font-semibold">
                                    Log In
                                </button>
                                </Link>

                              


                            </div>
                        </nav>
                    </DrawerContent>
                </Drawer>
            </div>
        </header>
    );
}
