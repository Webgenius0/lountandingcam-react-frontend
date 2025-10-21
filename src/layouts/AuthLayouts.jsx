import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../shared/NavBar'
import Footer from '../shared/Footer'


export default function AuthLayouts() {
    return (
        <div
        >
            <Navbar></Navbar>

            <div className='flex flex-col py-10 items-center px-10 lg:flex-row lg:h-screen justify-center gap-10 '>
                <Outlet></Outlet>
            </div>



            <Footer></Footer>

        </div>
    )
}
