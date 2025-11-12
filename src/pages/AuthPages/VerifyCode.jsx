import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import useVerifyForgetOTP from "../../hooks/auth/useVerifyForgetOTP";
import { toast } from "sonner";
import Loader from "../../components/common/loader/Loader";

export default function VerifyCode() {
  const [timer, setTimer] = useState(59);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const location = useLocation();
  const email = location.state?.email;
  const [MaskedEmail, setMaskedEmail] = useState("");

  //============== email mask ================ //

  function maskEmail() {
    if (!email || typeof email !== "string") {
      setMaskedEmail("");
      return;
    }

    const [localPart, domain] = email.split("@") || [];

    if (localPart && domain) {
      const maskedLocalPart =
        localPart[0] +
        "*".repeat(localPart.length - 2) +
        localPart[localPart.length - 1];
      setMaskedEmail(maskedLocalPart + "@" + domain);
    }
  }

  // UseEffect
  useEffect(() => {
    maskEmail();
  }, [email]);

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
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move to next input automatically
    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  // handle backspace key
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        // if empty, go back to previous input
        if (index > 0) {
          inputsRef.current[index - 1].focus();
        }
      } else {
        // clear current input
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  // handle resend otp
  const handleResend = () => {
    setTimer(59);
    setOtp(["", "", "", ""]);
    inputsRef.current[0].focus();
  };

  // Verify OTP Hook
  const { mutate: verifyForgetOTP, isPending: isOtpPending } =
    useVerifyForgetOTP({
      onSuccess: (res) => {
        toast.success(res?.message || "OTP has Sent to your Email");

        navigate("/auth/set-pass", {
          state: { token: res?.access_token, email: res?.data?.email },
        });
      },
      onError: (err) => {
        console.log(err);
        toast.error(err?.response?.data?.message || "Something went wrong");
      },
    });

  // handle verify btn
  const handleVerify = () => {
    const otpValue = otp.join("");

    if (otpValue.length === 4) {
      const submittedData = new FormData();
      submittedData.append("email", email);
      submittedData.append("otp", otpValue);
      verifyForgetOTP(submittedData);
    } else {
      toast.error("Please enter all 4 digits of the OTP!");
    }
  };

  return (
    <div className="flex items-center justify-center border bg-[#F7F5FB] rounded-xl w-full max-w-[450px] p-4">
      <div className="rounded-xl p-8 w-96 text-center">
        <h2 className="font-semibold text-xl inter-font mb-2">
          Verify Your Code
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          We've sent a code to{" "}
          <span className="font-medium text-black">{MaskedEmail}</span>
        </p>

        <div className="flex justify-center gap-3 mb-6">
          {otp?.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
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

      {isOtpPending && <Loader />}
    </div>
  );
}
