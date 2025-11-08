import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useMutation } from "@tanstack/react-query";
import Loader from "../../components/common/loader/Loader";


export default function SignUp() {
  // State
  const [showPass, setShowPass] = useState(false);
  const [showPassTwo, setShowPassTwo] = useState(false);

  // NAVIGATOR
  const navigate = useNavigate();

  // Hook FORM
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  // FOR WATCH
  const watchPass = watch('password')

  // API CALLING
  const axiosPublic = useAxiosPublic();

  const { mutate: singUpMutation, isPending } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: async (data) => {
      const res = await axiosPublic.post("/auth/register", data);
      return res?.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success(res?.message || "Form Submitted");
      sessionStorage.setItem("LTGEmailVerify", res?.data?.email);
      navigate("/auth/email-verify");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.message || "Something Went Wrong!");
    },
  });

  // FORM SUBMISSION
  const onSubmit = (data) => {
    singUpMutation(data);
    // console.log(data);

    // if (data.email && data.password && data.date && data.name) {
    //   toast.success("Account created successfully 🎉");

    //   navigate("/");
    // } else {
    //   toast.error("Please fill out all required fields");
    // }
  };
  return (
    <div className="bg-[#F7F5FB] rounded-xl w-full max-w-[450px] border  p-7 sm:p-10">
      <h3 className="text-xl  font-semibold inter-font text-primary  text-center sm:mb-6 ">
        Beaute Enterprise
      </h3>
      <p className="font-semibold text-xl inter-font  text-center mb-2 ">
        Welcome to the Beaute
      </p>
      <p className="text-gray-600 text-center mb-4">Create an New account</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1 sm:mb-2">
          {/* name input */}
          <div className="mb-4 relative">
            <label className="font-bold text-sm ">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Enter your full name"
              {...register("name", { required: true })}
              type="text"
              className={`w-full h-12 placeholder:text-gray-400 px-4 transition duration-200 bg-white border border-gray-300 rounded    ${
                errors.name
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-deep-purple-accent-400"
              }
            focus:outline-primary focus:shadow-outline`}
              name="name"
            />
          </div>
          {/* email Input */}
          <div className="mb-4 relative">
            <label className="font-bold text-sm ">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Enter your email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              type="email"
              className={`w-full h-12 placeholder:text-gray-400 px-4 transition duration-200 bg-white border border-gray-300 rounded    ${
                errors.email
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-deep-purple-accent-400"
              }
            focus:outline-primary focus:shadow-outline`}
              name="email"
            />
          </div>
          {/* date input */}
          <div className="mb-4 relative">
            <label className="font-bold text-sm ">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Enter your birthday date"
              {...register("dob", { required: true })}
              type="date"
              onFocus={(e) => (e.target.type = "date")}
              className={`w-full h-12 placeholder:text-gray-400 px-4 transition duration-200 bg-white border border-gray-300 rounded    ${
                errors.dob
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-deep-purple-accent-400"
              }
            focus:outline-primary focus:shadow-outline`}
              name="dob"
            />
          </div>

          {/* password input */}
          <div className="mb-4 relative">
            <label className="font-bold text-sm ">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Your Password"
              {...register("password", { required: true, minLength: 8 })}
              type={showPass ? "text" : "password"}
              className={`w-full h-12 placeholder:text-gray-400 px-4 transition duration-200 bg-white border border-gray-300 rounded    ${
                errors.password
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-deep-purple-accent-400"
              }
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

          {/* password input */}
          <div className="mb-4 relative">
            <label className="font-bold text-sm ">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Your Password"
              {...register("password_confirmation", { required: true, validate: (value)=> value === watchPass || "Password Do Not Match" })}
              type={showPassTwo ? "text" : "password"}
              className={`w-full h-12 placeholder:text-gray-400 px-4 transition duration-200 bg-white border border-gray-300 rounded    ${
                errors.password_confirmation
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-deep-purple-accent-400"
              }
            focus:outline-primary focus:shadow-outline`}
              name="password_confirmation"
            />
            
            <p className="text-red-400 text-[12px] my-1">{errors?.password_confirmation?.message}</p>
            
            <button
              type="button"
              onClick={() => {
                setShowPassTwo(!showPassTwo);
              }}
              className="btn btn-xs absolute top-9  right-6"
            >
              {showPassTwo ? (
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
            Create a New Account
          </button>
        </div>

        <div className="link mt-3 flex justify-end cursor-pointer text-primary gap-2 ">
          Already have an account?{" "}
          <Link className=" hover:underline" to="/auth/sign-in">
            LogIn
          </Link>
        </div>
      </form>
      {isPending && <Loader />}
    </div>
  );
}
