import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useForgetPassword from "../../hooks/auth/useForgetPassword";
import Loader from "../../components/common/loader/Loader";
import { toast } from "sonner";

export default function Forgot() {
  // Common states
  const navigate = useNavigate();

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Forget Password Hook
  const { mutate: forgetPassword, isPending: isForgetPending } =
    useForgetPassword({
      onSuccess: (res) => {
        res?.success &&
          (toast.success(res?.message),
          navigate("/auth/verify-code", {
            state: { email: res?.data?.email },
          }));

        console.log(res); // For Debug Only - Somor
      },

      onError: (err) => {
        toast.error(err?.response?.data?.message || "Something went wrong");

        console.log(err); // For Debug Only - Somor
      },
    });

  const onSubmit = (data) => {
    const submittedData = new FormData();
    submittedData.append("email", data.email);

    forgetPassword(submittedData);
  };

  return (
    <>
      <div className="bg-[#F7F5FB] rounded-xl w-full max-w-[450px] border  p-7 sm:p-10">
        <p className="font-semibold text-xl inter-font  text-center mb-2 ">
          Forgot Password
        </p>
        <p className="text-gray-600 text-center mb-4">
          We'll help you reset it and access your content
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-1 sm:mb-2">
            {/* email Input */}
            <div className="mb-4 relative">
              <label className="font-bold text-sm ">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Enter your email"
                {...register("email", { required: true })}
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

            <div className="mt-4  sm:mb-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-300 cursor-pointer rounded hover:bg-primary/90  shadow-md bg-primary hover:bg-minor "
              >
                Send
              </button>
            </div>
          </div>

          <div className="link mt-3  flex justify-end cursor-pointer text-gray-600 gap-2  ">
            Remember password?{" "}
            <Link to="/auth/sign-in">
              <span className="hover:underline text-primary">Log In</span>
            </Link>
          </div>
        </form>
      </div>

      {isForgetPending && <Loader />}
    </>
  );
}
