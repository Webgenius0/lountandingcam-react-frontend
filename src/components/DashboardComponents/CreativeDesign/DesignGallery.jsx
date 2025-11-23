import React, { useState } from "react";
import UploadSvg from "../../svg/UploadSvg";
import ThreeDotSvg from "../../svg/ThreeDotSvg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import DownloadSvg from "../../svg/DownloadSvg";
import profileSvg from '../../../assets/Img/ProfileSvg (2).png'
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { saveAs } from "file-saver";

const DesignGallery = ({ creativeDesignData }) => {
  const axiosSecure = useAxiosSecure();
  const [images, setImages] = useState(creativeDesignData);

  const { mutateAsync: saveImage } = useMutation({
    mutationFn: async (formData) => {
      const res = await axiosSecure.post("/creative-design/submit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data;
    },
  });

  // handle file upload

  const handleFileUpload = async (event) => {
    try {
      const files = Array.from(event.target.files);

      if (files.length === 0) return;

      for (const file of files) {
        const formData = new FormData();
        formData.append("image", file);

        // Preview
        const newImage = {
          title: file.name,
          size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
          imgSrc: URL.createObjectURL(file),
        };

        setImages((prev) => [newImage, ...prev]);

        // Upload single file
        await saveImage(formData);
      }

      toast.success("All designs saved successfully!");
    } catch (error) {
      toast.error("Failed to save some designs!");
      console.error("Upload error:", error);
    }
  };

  const handleDownload = (url, title) => {
    saveAs(url, title || "design.jpg");
  };

// const handleDownload = async (url, title, forceDownload = false) => {
//   try {
//     if (forceDownload) {
//       // Force download method - fetches and creates blob URL
//       const response = await fetch(url);
//       const buffer = await response.arrayBuffer();
//       const blob = new Blob([buffer], { type: "image/jpeg" });
//       const blobUrl = URL.createObjectURL(blob);
      
//       const link = document.createElement("a");
//       link.href = blobUrl;
//       link.download = title;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
      
//       // Clean up the blob URL after download
//       setTimeout(() => URL.revokeObjectURL(blobUrl), 100);
//     } else {
//       // Simple method - uses the original URL
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = title;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }
//   } catch (error) {
//     console.error('Download failed:', error);
//     // You might want to show a user-friendly error message here
//   }
// };

  return (
    <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
      {/* upload Section */}
      <label
        htmlFor="fileUpload"
        className="border-2 my-6 border-dashed bg-secondary/50 rounded-xl p-6 flex flex-col items-center justify-center w-64 h-48 border-primary/50 cursor-pointer space-y-3 transition-all hover:border-primary hover:bg-secondary/70"
      >
        <p className="text-sm font-medium text-gray-700 mb-2">
          Upload Your Design
        </p>
        <span className="bg-primary p-2 rounded-full">
          <UploadSvg />
        </span>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Drag and Drop file here or{" "}
          <span className="text-primary cursor-pointer hover:underline">
            Choose file
          </span>
        </p>
        <input
          id="fileUpload"
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFileUpload}
        />
      </label>

      {/* Images Grid */}
      <div className="flex items-center flex-wrap gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group bg-white shadow-sm rounded-xl overflow-hidden py-4 px-2 hover:shadow-md transition-all w-full md:w-72"
          >
            <div className="flex items-center justify-between mb-2 pr-2">
              <h4 className="text-sm font-medium w-64 text-gray-800 truncate">
                {img.title}
              </h4>

              {/* dropdown menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="cursor-pointer hover:scale-105 duration-300 ease-in-out border-none bg-transparent">
                    <ThreeDotSvg />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-32" align="end">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Copy Link</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Share Design</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Download</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <img
              src={img.image_url || img.imgSrc}
              alt={img.title}
              className="w-full h-40 rounded object-cover"
            />

            <div className="flex items-center mt-2 justify-between">
              <span className="rounded-full bg-primary ">
                <img src={profileSvg} className="size-8" alt="profile svg" />
              </span>
              <div className="flex items-center gap-3">
                <p className="text-xs text-gray-500">{img.size}</p>
                <a
                  // href={img.image_url || img.imgSrc}
                  // download={img.title}
                  onClick={() => handleDownload(img.image_url, img.title)}
                  className="cursor-pointer hover:scale-105 transition-transform"
                >
                  <DownloadSvg />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignGallery;
