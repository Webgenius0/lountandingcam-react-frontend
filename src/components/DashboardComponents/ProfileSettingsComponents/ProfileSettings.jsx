import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {  Upload, Trash2 } from "lucide-react";
import PrimaryBtn from "../../common/PrimaryBtn";

export default function ProfileSettings() {
  const [photo, setPhoto] = useState(null);
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "Noor H.",
      lastName: "Forhad",
      email: "demo1576216@gmail.com",
      phone: "+880 1234567890",
      dob: "1998-10-10",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
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
    <div >
      {/* profile upload  */}
      <div className="flex bg-white rounded-xl  border p-4 flex-col gap-8 items-start">
        <div className=" flex items-center gap-3 border rounded-xl p-4 ">
          <div className="w-24 h-24 rounded-full overflow-hidden border">
            {photo ? (
              <img
                src={photo}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            )}
          </div>

       <div className="flex flex-col items-center justify-center">
           <label className="mt-3 cursor-pointer text-sm font-medium border py-2  hover:bg-gray-200 px-3 duration-300 ease-in-out rounded-full  flex items-center gap-2">
           
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
              className="text-red-500 text-sm mt-2 flex items-center gap-1"
            >
               Delete Photo
            </button>
          )}
       </div>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 grid w-full grid-cols-1 md:grid-cols-2 gap-6"
        >
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

          <div className="md:col-span-2">
            <label className="text-sm text-gray-600">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full mt-1 p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">Email required</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="text-sm text-gray-600">Phone Number</label>
            <input
              {...register("phone", { required: true })}
              className="w-full mt-1 p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">Phone required</p>
            )}
          </div>

          <div className="md:col-span-2 relative">
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

          <div className="md:col-span-2 flex justify-start">
           <PrimaryBtn  type="submit" text="Save" className="w-64"/>
          </div>
        </form>
      </div>
    </div>
  );
}
