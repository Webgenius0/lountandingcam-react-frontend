import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import PrimaryBtn from "../../common/PrimaryBtn";

export default function ProfileSettings() {
  const [photo, setPhoto] = useState(null);

  // local storage 
  const storedUser = useMemo(() => {
  try {
    return JSON.parse(localStorage.getItem("LG_userData")) || {};
  } catch {
    return {};
  }
}, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // form default values setup from localStorage
  useEffect(() => {
    if (storedUser) {
      setValue("firstName", storedUser?.name?.split(" ")[0] || "");
      setValue("lastName", storedUser?.name?.split(" ")[1] || "");
      setValue("dob", storedUser?.dob || "");
    }
  }, [storedUser ,setValue]);

  const onSubmit = (data) => {
    console.log("Final Data:", data);
    alert("Profile Saved!");
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  const handleDeletePhoto = () => {
    setPhoto(null);
  };

  return (
    <div>
      <div className="flex bg-white rounded-xl border p-4 flex-col gap-8 items-start">
        
        {/* === Form Start === */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 w-full grid grid-cols-2 gap-6"
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
                  src="https://images.unsplash.com/photo-1615109398623-88346a601842?fm=jpg&q=60&w=3000"
                  alt="Placeholder"
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

              {photo && (
                <button
                  onClick={handleDeletePhoto}
                  type="button"
                  className="text-red-500 text-sm mt-2 flex items-center gap-1"
                >
                  Delete Photo
                </button>
              )}
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
           <input {...register("phone", { required: true })} 
           type="number"
           className="w-full mt-1 p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary" /> 
           {errors.phone && ( <p className="text-red-500 text-xs mt-1">Phone required</p> )} </div>

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
            className={`relative rounded-full cursor-pointer  py-3 overflow-hidden group bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary/80 text-white  transition-all ease-out duration-300 px-10 mt-4`}
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>

            <span className="relative">Save</span>
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
