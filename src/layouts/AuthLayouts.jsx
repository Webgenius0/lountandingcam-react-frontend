import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../shared/NavBar";
import Footer from "../shared/Footer";

export default function AuthLayouts() {
  return (
    <div className="bg-gray-50">
      <ScrollRestoration />

      <div className="sticky top-6 z-50">
        <Navbar></Navbar>
      </div>

      <div className="flex  w-11/12 mx-auto items-center lg:flex-row py-15 lg:py-20 justify-center  ">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
}
