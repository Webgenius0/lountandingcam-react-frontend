import React from 'react'
import { Link } from 'react-router'
import { TfiWorld } from 'react-icons/tfi'
import { BsTwitterX } from 'react-icons/bs'
import { FaArrowRightLong, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'
import LocationSvg from '../components/svg/LocationSvg'
import SiteSvg from '../components/svg/SiteSvg'


export default function Footer() {


    return (
        <section className='bg-primary  text-white py-20' >

            <div className='2xl:max-w-9/12 flex flex-col lg:flex-row   items-start gap-10 max-w-11/12 mx-auto '>

                <div className='lg:w-4/12'>
                    {/* logo */}
                    <Link to="/" className="flex flex-col items-start space-y-2">

                        <div className='flex items-center gap-2'>

                            <span className="text-2xl inter-font font-semibold">Beaute Enterprise</span>
                        </div>
                        <p className=" text-gray-300 ">Empowering Teen Growth & <br /> Creativity.</p>
                    </Link>




                    {/* social link */}

                    <div className='flex items-center mt-6 gap-10'>


                        <span className='flex *:size-6 *:hover:scale-105 *:duration-300 *:ease-in-out *:cursor-pointer  items-center gap-3'>
                            <BsTwitterX />
                            <FaYoutube />
                            <FaFacebookF />
                            <FaLinkedinIn />
                        </span>

                    </div>
                </div>

                {/* footer link */}

                <div className='w-full xl:w-4/12'>
                    <p className="font-semibold tracking-wider ">Quick Links</p>
                    <ul className="mt-2 grid grid-cols-2 justify-around -space-x-8 space-y-2">
                        <li>
                            <Link
                                to="/journaling"
                                className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Journaling
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/fashion"
                                className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Fashion
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/finance"
                                className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                               Finance
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/ creative-design"
                                className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                               Creative Design
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                               About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/privacy"
                                className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Privacy and Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/support"
                                className="text-gray-200 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                                Support
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="text-gray-200 transition-colors duration-300   hover:text-deep-purple-accent-400"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* contact form  */}

                <div className=" mx-auto bg-[#75598a]   rounded-xl p-6">
                    <div className="mb-8">
                        <h2 className="font-bold text-white mb-2">Contact Us</h2>
                        <p className='flex gap-2 items-start w-11/12 text-gray-200' ><LocationSvg/>
                        37 avenue Ledru Rollin Paris, France 75012
                        </p>
                        <p className='flex gap-2 items-start mt-2 w-11/12 text-gray-200' ><SiteSvg/>
                        lountanding@beauteenteprise.com
                        </p>
                    </div>

                  



                </div>

            </div>

            <div className='2xl:max-w-9/12 w-11/12 flex justify-center items-center gap-3 mt-10 pt-10 border-t-2 border-secondary/30 mx-auto'>


                <p className=' text-gray-200'>Copyright 2025. All Rights Reserved. Powered by the Awesomeness of Fresh Fruit.</p>

            </div>

        </section>
    )
}
