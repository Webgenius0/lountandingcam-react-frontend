import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useLocation } from "react-router";
import useSetNewPassword from "../../hooks/auth/useSetNewPassword";
import Loader from "../../components/common/loader/Loader";

export default function SetNewPass() {
  // Common States
  const navigate = useNavigate();
  const location = useLocation();
  const apiParamsEmail = location?.state?.email;
  const apiParamsToken = location?.state?.token;

  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Set New Password Hook
  const { mutate: setNewPassword, isPending: setNewPassPending } =
    useSetNewPassword({
      onSuccess: (res) => {
        res?.success &&
          (toast.success(res?.message), navigate("/auth/successful"));
      },
      onError: (err) => {
        toast.error(err?.response?.data?.message || "Something went wrong");
      },
    });

  const onSubmit = (data) => {
    if (data.password1 === data.password2) {
      const submittedData = new FormData();
      submittedData.append("email", apiParamsEmail);
      submittedData.append("token", apiParamsToken);
      submittedData.append("password", data.password1);
      submittedData.append("password_confirmation", data.password2);

      setNewPassword(submittedData);
    } else {
      toast.error("Password are not same");
    }
  };

  return (
    <div className="bg-[#F7F5FB] rounded-xl w-full max-w-[450px] border  p-7 sm:p-10">
      <p className="font-semibold text-xl inter-font  text-center mb-2 ">
        Set New Password
      </p>
      <p className="text-gray-600 text-center mb-4">
        Let’s create new password for your account
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1 sm:mb-2">
          {/* Password Input 1 */}
          <div className="mb-4 relative">
            <label className="font-bold text-sm ">
              New Password <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Your Password"
              {...register("password1", { required: true })}
              type={showPass ? "text" : "password"}
              className={`w-full h-12 placeholder:text-gray-400 px-4 transition duration-200 bg-white border border-gray-300 rounded    ${
                errors.password1
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-deep-purple-accent-400"
              }
            focus:outline-primary focus:shadow-outline`}
              name="password1"
            />

            <button
              type="button"
              onClick={() => {
                setShowPass(!showPass);
              }}
              className="btn btn-xs absolute top-9 right-6"
            >
              {showPass ? (
                <FaEyeSlash color="gray" size={22} />
              ) : (
                <FaEye color="gray" size={22} />
              )}
            </button>
          </div>

          {/* input Password 2 */}
          <div className="mb-4 relative">
            <label className="font-bold text-sm ">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              placeholder="Your Password"
              {...register("password2", { required: true })}
              type={showPass1 ? "text" : "password"}
              className={`w-full h-12 placeholder:text-gray-400 px-4 transition duration-200 bg-white border border-gray-300 rounded    ${
                errors.password2
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-deep-purple-accent-400"
              }
            focus:outline-primary focus:shadow-outline`}
              name="password2"
            />

            <button
              type="button"
              onClick={() => {
                setShowPass1(!showPass1);
              }}
              className="btn btn-xs absolute top-9  right-6"
            >
              {showPass1 ? (
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

      {setNewPassPending && <Loader />}
    </div>
  );
}
