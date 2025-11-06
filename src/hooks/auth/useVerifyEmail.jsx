import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic";

export default function useVerifyEmail({ onSuccess, onError }) {
  const axiosPublic = useAxiosPublic();

  return useMutation({
    mutationKey: ["emailVerify"],

    mutationFn: async (data) => {
      const res = await axiosPublic.post("/auth/verify-email", data);
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
