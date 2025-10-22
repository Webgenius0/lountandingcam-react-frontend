import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../shared/NavBar";
import Footer from "../shared/Footer";

export default function AuthLayouts() {
  return (
    <div className="bg-gray-50">
      <ScrollRestoration />

      <nav className="sticky top-6 z-50">
        <Navbar></Navbar>
      </nav>

      <div className="flex   items-center lg:flex-row py-20 justify-center  ">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
}
