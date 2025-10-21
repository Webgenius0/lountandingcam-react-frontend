import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../shared/NavBar'
import Footer from '../shared/Footer'

export default function MainLayouts() {
  return (
    <div>

       <NavBar></NavBar>
        <main>
            <Outlet></Outlet>
        </main>
        <Footer></Footer>


    </div>
  )
}
