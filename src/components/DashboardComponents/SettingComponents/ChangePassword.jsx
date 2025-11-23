import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";

import { useDispatch } from "react-redux";
import { userData } from "../../../redux/userSlice";
import { userToken } from "../../../redux/userTokenSlice";
import { toast } from "sonner";

export default function ChangePassword() {
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const watchNewPassword = watch("newPassword");

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      // 1. update password
      const res = await axiosSecure.post("/update-password", {
        current_password: data.currentPassword,
        new_password: data.newPassword,
        new_password_confirmation: data.confirmPassword,
      });

      toast.success("Password updated. Logging out...");
      if (res.status === 200) {
        dispatch(userData(null));
        dispatch(userToken(null));
        navigate("/");
      }

      toast.success("Logged out successfully");
    } catch (err) {
      const error = err?.response?.data?.message;
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h4 className="md:text-2xl font-bold mb-4">Change Password</h4>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-6">
          {/* Current Password */}
          <div className="mb-4 relative">
            <label className="text-gray-400">Current Password</label>
            <input
              {...register("currentPassword", {
                required: "Current password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              type={showPass ? "text" : "password"}
              placeholder="Your Current Password"
              className={`w-full h-12 mt-2 px-4 bg-gray-100 border rounded-sm ${
                errors.currentPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute top-11 right-6"
            >
              {showPass ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
            </button>
            {errors.currentPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.currentPassword.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div className="mb-4 relative">
            <label className="text-gray-400">New Password</label>
            <input
              {...register("newPassword", {
                required: "New password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                // pattern: {
                //   value:
                //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                //   message:
                //     "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
                // },
              })}
              type={showPass1 ? "text" : "password"}
              placeholder="Your New Password"
              className={`w-full h-12 mt-2 px-4 bg-gray-100 border rounded-sm ${
                errors.newPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPass1(!showPass1)}
              className="absolute top-11 right-6"
            >
              {showPass1 ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
            </button>
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-4 relative">
            <label className="text-gray-400">Confirm Password</label>
            <input
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watchNewPassword || "Passwords do not match",
              })}
              type={showPass2 ? "text" : "password"}
              placeholder="Confirm Your Password"
              className={`w-full h-12 mt-2 px-4 bg-gray-100 border rounded-sm ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPass2(!showPass2)}
              className="absolute top-11 right-6"
            >
              {showPass2 ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
            </button>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className={`relative rounded-full cursor-pointer py-3 overflow-hidden group bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary/80 text-white transition-all ease-out duration-300 px-10 mt-4 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">
              {loading ? "Processing..." : "Save"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
