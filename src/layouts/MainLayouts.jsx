import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../shared/Footer";
import Navbar from "../shared/NavBar";

export default function MainLayouts() {
  return (
    <div>
      <ScrollRestoration />

      <div className="sticky top-7 z-50">
        <Navbar></Navbar>
      </div>
      <main >
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
