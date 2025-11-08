import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic";

export default function useLogin({ onSuccess, onError }) {
  const axiosPublic = useAxiosPublic();

  return useMutation({
    mutationKey: ["loginUser"],
    mutationFn: async (data) => {
      const res = await axiosPublic.post("/auth/login", data);
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
