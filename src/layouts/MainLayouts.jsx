import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../shared/Footer";
import Navbar from "../shared/NavBar";

export default function MainLayouts() {
  return (
    <div>
      <ScrollRestoration />

      <nav className="sticky top-7 z-50">
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
