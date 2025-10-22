

import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router"; 

export default function VerifyCode() {
  const [timer, setTimer] = useState(59);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  // countdown timer
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  // handle otp
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ""); 
    if (value) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 3) {
        inputsRef.current[index + 1].focus();
      }

  
      if (index === 3 && newOtp.every((digit) => digit !== "")) {
        const otpValue = newOtp.join("");
        // console.log("Entered OTP:", otpValue);

       
        setTimeout(() => navigate("/auth/set-pass"), 500);
      }
    }
  };

  const handleResend = () => {
    setTimer(59);
    setOtp(["", "", "", ""]);
    inputsRef.current[0].focus();
  };

  return (
    <div className="flex items-center justify-center bg-[#F7F5FB] rounded-xl w-full max-w-[450px] p-4">
      <div className="rounded-xl bg-white p-8 w-96 text-center border border-gray-100">
        <h2 className="font-semibold text-xl inter-font mb-2">Verify Your Code</h2>
        <p className="text-sm text-gray-600 mb-6">
          We've sent a code to <span className="font-medium text-black">dummy@gmail.com</span>
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
              className="w-12 h-12 text-center text-lg font-semibold bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary border"
            />
          ))}
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-300 cursor-pointer rounded hover:bg-primary/90 shadow-md bg-primary"
        >
          Verify
        </button>

        <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
          <p>
            Code expire in: <span className="font-medium">{timer}s</span>
          </p>

          <button
            onClick={handleResend}
            disabled={timer > 0}
            className={`underline ${
              timer > 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-primary hover:no-underline"
            }`}
          >
            Resend Code
          </button>
        </div>
      </div>
    </div>
  );
}

