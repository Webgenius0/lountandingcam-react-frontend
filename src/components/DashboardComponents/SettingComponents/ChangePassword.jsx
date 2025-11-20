import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PrimaryBtn from "../../common/PrimaryBtn";

export default function ChangePassword() {
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="p-4">
      <h4 className="md:text-2xl font-bold mb-4">Change Password</h4>

      <form onSubmit={handleSubmit()}>
        <div className="flex flex-col space-y-6">
          {/* Current password  */}
          <div className="mb-4 relative">
            <label className=" text-gray-400  ">Current Password</label>
            <input
              placeholder="Your Password"
              {...register("currentPassword", { required: true })}
              type={showPass ? "text" : "password"}
              className={`w-full h-12 mt-2 placeholder:text-gray-400 px-4 transition duration-200 bg-gray-100 border border-gray-300 rounded-sm    ${
                errors.currentPassword
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-deep-purple-accent-400"
              }
                        focus:outline-primary focus:shadow-outline`}
              name="currentPassword"
            />

            <button
              type="button"
              onClick={() => {
                setShowPass(!showPass);
              }}
              className="btn btn-xs absolute top-11 right-6"
            >
              {showPass ? (
                <FaEyeSlash color="gray" size={22} />
              ) : (
                <FaEye color="gray" size={22} />
              )}
            </button>
          </div>

          {/*new Password  */}
          <div className="mb-4 relative">
            <label className=" text-gray-400  ">New Password</label>
            <input
              placeholder="Your Password"
              {...register("newPassword", { required: true })}
              type={showPass1 ? "text" : "password"}
              className={`w-full h-12 mt-2 placeholder:text-gray-400 px-4 transition duration-200 bg-gray-100 border border-gray-300 rounded-sm    ${
                errors.newPassword
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-deep-purple-accent-400"
              }
                        focus:outline-primary focus:shadow-outline`}
              name="newPassword"
            />

            <button
              type="button"
              onClick={() => {
                setShowPass1(!showPass1);
              }}
              className="btn btn-xs absolute top-11 right-6"
            >
              {showPass1 ? (
                <FaEyeSlash color="gray" size={22} />
              ) : (
                <FaEye color="gray" size={22} />
              )}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="mb-4 relative">
            <label className=" text-gray-400  ">Confirm Password</label>
            <input
              placeholder="Your Password"
              {...register("confirmPassword", { required: true })}
              type={showPass2 ? "text" : "password"}
              className={`w-full h-12 mt-2 placeholder:text-gray-400 px-4 transition duration-200 bg-gray-100 border border-gray-300 rounded-sm    ${
                errors.confirmPassword
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-deep-purple-accent-400"
              }
                        focus:outline-primary focus:shadow-outline`}
              name="confirmPassword"
            />

            <button
              type="button"
              onClick={() => {
                setShowPass2(!showPass2);
              }}
              className="btn btn-xs absolute top-11 right-6"
            >
              {showPass2 ? (
                <FaEyeSlash color="gray" size={22} />
              ) : (
                <FaEye color="gray" size={22} />
              )}
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <PrimaryBtn type="submit" text="Save" className="w-64 mt-8" />
        </div>
      </form>
    </div>
  );
}
