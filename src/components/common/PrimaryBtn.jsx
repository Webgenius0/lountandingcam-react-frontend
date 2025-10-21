import React from "react";
import { Link } from "react-router";

export default function PrimaryBtn({
    text = "Button Text",
    to = "#",
    className = "",
    onClick,
    type = "button",
}) {
    return (
        <Link to={to}>
            <button
                type={type}
                onClick={onClick}
                className={`relative rounded-full cursor-pointer px-5 py-2.5 overflow-hidden group bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary/80 text-white hover:ring-2 hover:ring-offset-2 transition-all ease-out duration-300 ${className}`}
            >

                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>

                <span className="relative">{text}</span>
            </button>
        </Link>
    );
}
