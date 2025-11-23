import React, { useState } from "react";
import DeleteSvg from "../../svg/DeleteSvg";
import DeleteAccountModal from "../../common/DeleteAccountModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { userData } from "../../../redux/userSlice";
import { userToken } from "../../../redux/userTokenSlice";
import { useNavigate } from "react-router";

export default function AccountDelete() {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteAccount = async (password) => {
    setDeleteModalOpen(false);

    // console.log(password);
    try {
      const res = await axiosSecure.post("/delete-account", {
        password: password,
      });

      toast.success("Account Deleted Successfully");
      if (res.status === 200) {
        dispatch(userData(null));
        dispatch(userToken(null));
        navigate("/");
      }
    } catch (err) {
      const error = err?.response?.data?.message;
      toast.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center lg:py-30 justify-center p-4 text-center">
      <div className="rounded-full bg-red-100 p-3">
        <DeleteSvg />
      </div>
      <h2 className="md:text-2xl mt-6 font-bold">
        Are you sure you want to delete your account?
      </h2>
      <p className="lg:w-8/12 text-sm md:text-base opacity-70 mt-2">
        Once deleted, your account and all saved data (journal entries, fashion
        picks, finance logs, and designs) will be permanently removed. This
        action cannot be undone.
      </p>
      <button
        onClick={() => setDeleteModalOpen(true)}
        className="rounded-full px-6 py-3 bg-red-500 mt-6 hover:bg-red-500/50 duration-300 ease-in-out cursor-pointer text-white"
      >
        Delete Account
      </button>
      <DeleteAccountModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteAccount}
      />
    </div>
  );
}
