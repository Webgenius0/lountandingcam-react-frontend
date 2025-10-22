import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator"



export default function SignIn() {


    const [showPass, setShowPass] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const navigate = useNavigate();


    const onSubmit = (data) => {
        // console.log(data);

        if (data.email && data.password) {
            navigate("/");
        }
    }
    return (



        <div className="bg-[#F7F5FB] rounded-xl w-full max-w-[450px] border  p-7 sm:p-10">
<<<<<<< HEAD
            <h3 className="text-xl  font-semibold inter-font text-primary  text-center sm:mb-6 ">
=======
            <h3 className="text-xl  font-bold inter-font text-primary semibold text-center sm:mb-6 ">
>>>>>>> e18d9c2b3146cf1f6ac7b4acb8e0d1f2ad1b41c0
                Beaute Enterprise
            </h3>
            <p className="font-semibold text-xl inter-font  text-center mb-2 ">
                Welcome to the Beaute
            </p>
            <p className="text-gray-600 text-center mb-4">Log in to continue</p>


            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-1 sm:mb-2">
                    {/* Email Input */}
                    <div className="mb-4 relative">
                        <label className='font-bold text-sm '>Email <span className="text-red-500">*</span></label>
                        <input
                            placeholder="Enter your email"
                            {...register("email", { required: true })}
                            type="email"

                            className={`w-full h-12 placeholder:text-gray-400 px-4 transition duration-200 bg-white border border-gray-300 rounded    ${errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-deep-purple-accent-400"}
            focus:outline-primary focus:shadow-outline`}
                            name="email"
                        />

                    </div>

                    {/* Password Input */}
                    <div className="mb-4 relative">
                        <label className='font-bold text-sm '>Password <span className="text-red-500">*</span></label>
                        <input
                            placeholder="Your Password"
                            {...register("password", { required: true })}
                            type={showPass ? "text" : "password"}
                            className={`w-full h-12 placeholder:text-gray-400 px-4 transition duration-200 bg-white border border-gray-300 rounded    ${errors.password ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-deep-purple-accent-400"}
            focus:outline-primary focus:shadow-outline`}
                            name="password"

                        />



                        <button
                            type="button"
                            onClick={() => {
                                setShowPass(!showPass);
                            }}
                            className="btn btn-xs absolute top-9  right-6"
                        >
                            {showPass ? (
                                <FaEyeSlash color="gray" size={22} />
                            ) : (
                                <FaEye color="gray" size={22} />
                            )}
                        </button>
                    </div>
                </div>



                <div className="mt-4  sm:mb-4">

                    <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-300 cursor-pointer rounded hover:bg-primary/90  shadow-md bg-primary hover:bg-minor "
                    >
                        Log In
                    </button>
                </div>
               <Link to='/auth/forgot-pass'>
                <button

                    className="link mt-3 underline flex justify-end cursor-pointer text-primary hover:no-underline "
                >
                    Forgot password?
                </button>
               </Link>
            </form>

              <div className='flex items-center my-4 place-content-center mx-auto w-6/12 gap-2 '>
            <Separator /> Or <Separator />
        </div>

        <button className="rounded text-primary border border-primary w-full py-3 cursor-pointer hover:bg-secondary duration-300 ease-in-out" >
Create a New Account
        </button>


         
        </div>


    );
};

