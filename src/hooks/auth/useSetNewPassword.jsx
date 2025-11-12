import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic";

export default function useSetNewPassword({ onSuccess, onError }) {
  const axiosPublic = useAxiosPublic();

  return useMutation({
    mutationKey: ["setNewPassword"],
    mutationFn: async (submittedData) => {
      const res = await axiosPublic.post("/auth/reset-password", submittedData);
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
