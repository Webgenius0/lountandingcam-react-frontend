import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import SuccessfulSvg from "../../components/svg/SuccessfulSvg";

export default function Successful() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth/sign-in");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-[#F7F5FB] rounded-xl flex flex-col justify-center items-center w-full max-w-[450px] border p-7 sm:p-10">
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: -20 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10,
          duration: 0.6,
        }}
      >
        <SuccessfulSvg />
      </motion.div>

      <motion.p
        className="text-green-600 my-4 font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Done
      </motion.p>

      <motion.p
        className="text-center text-sm text-gray-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Your password has been successfully reset. You can now log in with your
        new password.
      </motion.p>
    </div>
  );
}
