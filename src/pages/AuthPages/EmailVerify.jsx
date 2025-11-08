import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import useVerifyEmail from "../../hooks/auth/useVerifyEmail";
import { toast } from "sonner";
import Loader from "../../components/common/loader/Loader";
import useResendOtp from "../../hooks/auth/useResendOtp";

export default function EmailVerify() {
  // STATES
  const [timer, setTimer] = useState(59);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  //   SESSIONSTORAGE
  const email = sessionStorage.getItem("LTGEmailVerify");

  //   CUSTOMHOOKFORAPI
  const { mutate: emailVerify, isPending: isEmailPending } = useVerifyEmail({
    onSuccess: (res) => {
      console.log(res);
      navigate("/auth/sign-in")
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.message || "Something went wrong");
    },
  });

  // CustomAPIForSendOTP
  const { mutate: resendOtp, isPending: isOtpPending } = useResendOtp({
    onSuccess: (res) => {
      console.log(res);
      toast.success(res?.message || "OTP has Sent to your Email")
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.message || "Something went wrong");
    },
  });

  // countdown timer
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  // handle otp input
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    if (value) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 3) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  // handle resend otp
  const handleResend = () => {
    setTimer(59);
    setOtp(["", "", "", ""]);
    inputsRef.current[0].focus();

    const resendOtpData = new FormData()
    resendOtpData.append("email", email)
    resendOtp(resendOtpData)
  };

  // handle verify btn
  const handleVerify = () => {
    const otpValue = otp.join("");
    if (otpValue.length === 4) {
      const submissionData = new FormData();
      submissionData.append("email", email);
      submissionData.append("otp", otpValue);
      emailVerify(submissionData);
    } else {
      alert("Please enter all 4 digits of the OTP!");
    }
  };

  return (
    <div className="flex items-center justify-center border bg-[#F7F5FB] rounded-xl w-full max-w-[450px] p-4">
      <div className="rounded-xl p-8 w-96 text-center">
        <h2 className="font-semibold text-xl inter-font mb-2">
          Verify Your Email
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          We've sent a code to{" "}
          <span className="font-medium text-black">{email}</span>
        </p>

        <div className="flex justify-center gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              className="w-16 h-16 text-center text-lg font-semibold bg-white rounded focus:outline-none focus:ring-2 focus:ring-primary border"
            />
          ))}
        </div>

        {/* verify btn */}
        <button
          onClick={handleVerify}
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-300 cursor-pointer rounded hover:bg-primary/90 shadow-md bg-primary"
        >
          Verify
        </button>

        <div className="flex justify-between items-center text-sm text-primary mt-4">
          <p>
            Code expire in: <span className="font-medium">{timer}s</span>
          </p>

          <button
            onClick={handleResend}
            disabled={timer > 0}
            className={`underline ${
              timer > 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-primary cursor-pointer hover:no-underline"
            }`}
          >
            Resend Code
          </button>
        </div>
      </div>
      {isEmailPending && <Loader />}
      {isOtpPending && <Loader />}
    </div>
  );
}
