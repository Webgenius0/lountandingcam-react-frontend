import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import profileSvg from "../../../assets/Img/ProfileSvg (2).png";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "sonner";
import { useSelector } from "react-redux";

export default function ProfileSettings() {
  const [photo, setPhoto] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const axiosSecure = useAxiosSecure();

  const userData = useSelector((state) => state?.userData?.value);

  const { mutateAsync: saveProfile, isPending } = useMutation({
    mutationFn: async (formData) => {
      const res = await axiosSecure.post("/update-profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      return res.data;
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // form default values setup from redux
  useEffect(() => {
    if (userData) {
      setValue("firstName", userData?.name?.split(" ")[0] || "");
      setValue("lastName", userData?.name?.split(" ")[1] || "");
      setValue("dob", userData?.dob || "");
      setValue("phone", userData?.phone || "");

      // if photo  available
      // if (userData?.avatar) {
      //   setPhoto(userData.avatar);
      // }
    }
  }, [userData, setValue]);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
      setPhotoFile(file);
    } else {
      setPhoto(profileSvg);
    }
  };

  const onSubmit = async (data) => {
    const fullName = `${data.firstName} ${data.lastName}`.trim();

    try {
      const formData = new FormData();

      // append form data
      formData.append("name", fullName || "");
      formData.append("phone", data.phone || "");
      formData.append("dob", data.dob || "");

      // append photo file if selected
      if (photoFile) {
        formData.append("avatar", photoFile);
      }

      await saveProfile(formData);
      toast.success("Profile Saved!");

      // Update local storage with new data
      const updatedUser = {
        ...userData,
        name: fullName,
        phone: data.phone,
        dob: data.dob,
        avatar: photoFile ? URL.createObjectURL(photoFile) : userData?.avatar,
      };
      localStorage.setItem("LG_userData", JSON.stringify(updatedUser));

      console.log("upload", updatedUser.avatar);
    } catch (err) {
      console.log(err);
      toast.error("Error saving profile!");
    }
  };

  return (
    <div>
      <div className="flex bg-white rounded-xl border p-4 flex-col gap-8 items-start">
        {/* hook form  */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 w-full grid grid-cols-2 gap-6"
          encType="multipart/form-data"
        >
          {/* Profile Upload */}
          <div className="flex col-span-full items-center gap-3 border rounded-xl p-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border">
              {photo ? (
                <img
                  src={photo}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={profileSvg}
                  alt="profile svg"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="flex flex-col items-center justify-center">
              <label className="mt-3 cursor-pointer text-sm font-medium border py-2 px-3 hover:bg-gray-200 duration-300 rounded-full flex items-center gap-2">
                Upload Profile Photo
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
              </label>
            </div>
          </div>

          {/* First Name */}
          <div>
            <label className="text-sm text-gray-600">First Name</label>
            <input
              {...register("firstName", { required: true })}
              className="w-full mt-1 p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">First name required</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm text-gray-600">Last Name</label>
            <input
              {...register("lastName", { required: true })}
              className="w-full mt-1 p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">Last name required</p>
            )}
          </div>

          {/* phone */}
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600">Phone Number</label>
            <input
              {...register("phone", { required: true })}
              type="tel"
              className="w-full mt-1 p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">Phone required</p>
            )}
          </div>

          {/* Date of Birth */}
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600">Date of Birth</label>
            <div className="relative mt-1">
              <input
                {...register("dob", { required: true })}
                type="date"
                className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            {errors.dob && (
              <p className="text-red-500 text-xs mt-1">Date required</p>
            )}
          </div>

          {/* Save Button */}
          <div className="md:col-span-2 flex justify-center lg:justify-start">
            <button
              type="submit"
              disabled={isPending}
              className={`relative rounded-full cursor-pointer py-3 overflow-hidden group bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary/80 text-white transition-all ease-out duration-300 px-10 mt-4 ${
                isPending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">
                {isPending ? "Saving..." : "Save"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
