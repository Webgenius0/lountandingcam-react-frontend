import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic";

export default function useVerifyForgetOTP({ onSuccess, onError }) {
  const axiosPublic = useAxiosPublic();

  return useMutation({
    mutationKey: ["verifyForgetOTP"],
    mutationFn: async (submittedData) => {
      const res = await axiosPublic.post("/auth/verify-otp", submittedData);
      return res?.data;
    },
    onSuccess: (res) => {
      if (onSuccess) onSuccess(res);
    },
    onError: (err) => {
      if (onError) {
        onError(err);
      }
    },
  });
}
