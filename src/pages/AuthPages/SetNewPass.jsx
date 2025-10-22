import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export default function SetNewPass() {

    const [showPass, setShowPass] = useState(false);
    const {register,handleSubmit, formState: { errors }} = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        // console.log(data);

        if (data.email && data.password) { navigate("/")}
    }

  return (
    <div className="bg-[#F7F5FB] rounded-xl w-full max-w-[450px] border  p-7 sm:p-10">
        
            <p className="font-semibold text-xl inter-font  text-center mb-2 ">
              Set New Password
            </p>
            <p className="text-gray-600 text-center mb-4">Let’s create new password for your account</p>


            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-1 sm:mb-2">
              

                    {/* Password Input 1 */}
                    <div className="mb-4 relative">
                        <label className='font-bold text-sm '>New Password <span className="text-red-500">*</span></label>
                        <input
                            placeholder="Your Password"
                            {...register("password1", { required: true })}
                            type={showPass ? "text" : "password"}
                            className={`w-full h-12 placeholder:text-gray-400 px-4 transition duration-200 bg-white border border-gray-300 rounded    ${errors.password1 ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-deep-purple-accent-400"}
            focus:outline-primary focus:shadow-outline`}
                            name="password"

                        />


                        <button
                            type="button"
                            onClick={() => {
                                setShowPass(!showPass);
                            }}
                            className="btn btn-xs absolute top-9 right-6">
                            {showPass ? (
                                <FaEyeSlash color="gray" size={22} />
                            ) : (
                                <FaEye color="gray" size={22} />
                            )}
                        </button>
                    </div>

                    {/* input Password 2 */}
                    <div className="mb-4 relative">
                        <label className='font-bold text-sm '>Confirm Password <span className="text-red-500">*</span></label>
                        <input
                            placeholder="Your Password"
                            {...register("password2", { required: true })}
                            type={showPass ? "text" : "password"}
                            className={`w-full h-12 placeholder:text-gray-400 px-4 transition duration-200 bg-white border border-gray-300 rounded    ${errors.password2 ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-deep-purple-accent-400"}
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
                        Reset Password
                    </button>
                </div>
             
            </form>

            

     


         
        </div>
  )
}
