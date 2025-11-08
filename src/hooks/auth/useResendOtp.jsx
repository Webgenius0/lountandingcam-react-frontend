import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic";

export default function useResendOtp({onSuccess,onError}) {
  const axiosPublic = useAxiosPublic();

  return useMutation({
    mutationKey: ["resendOtp"],

    mutationFn: async (data) => {
      const res = await axiosPublic.post("/auth/resend-otp", data);
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
