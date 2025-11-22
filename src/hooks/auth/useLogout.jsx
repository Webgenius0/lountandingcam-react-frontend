import toast from "react-hot-toast";
import useAxiosSecure from "../useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { userData } from "../../redux/userSlice";
import { userToken } from "../../redux/userTokenSlice";

export default function useLogout() {
  // Global States
  const axiosSecure = useAxiosSecure();

  // Common States
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      const res = await axiosSecure.post("/auth/logout");
      return res?.data;
    },
    onSuccess: (res) => {
      toast.success(res?.message || "Logout successfully");
      if (res.success) {
        localStorage.removeItem("LG_AccessToken");
        localStorage.removeItem("LG_userData");
        dispatch(userData(null));
        dispatch(userToken(null));
        navigate("/");
      }
    },
    onError: (err) => {
      toast.success(res?.message || "Logout successfully");
      console.log(err || "Something went wrong");

      localStorage.removeItem("LG_AccessToken");
      localStorage.removeItem("LG_userData");
      dispatch(userData(null));
      dispatch(userToken(null));

      navigate("/");
    },
  });
}
