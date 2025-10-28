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
import { FcBusinessman } from "react-icons/fc";
import { toast } from "sonner";

const DesignGallery = () => {
  const [images, setImages] = useState([
    {
      title: "Digital Shoes Design.PNG",
      size: "3.56 MB",
      imgSrc: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    },
    {
      title: "Digital Shoes Design.PNG",
      size: "3.56 MB",
      imgSrc: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    },
  ]);

  // handle file upload
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      title: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      imgSrc: URL.createObjectURL(file),
    }));
    setImages((prev) => [...newImages, ...prev]);
  };

 const handleDownload = () => {
     toast.success("This feature is currently under development.");
    
  };

  return (
    <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
      {/* upload Section */}
      <label
        htmlFor="fileUpload"
        className="border-2 my-6 border-dashed bg-secondary/50 rounded-xl p-6 flex flex-col items-center justify-center w-64 h-48 border-primary/50 cursor-pointer space-y-3  transition-all"
      >
        <p className="text-sm font-medium text-gray-700 mb-2">
          Upload Your Design
        </p>
        <span className="bg-primary p-2 rounded-full">
          <UploadSvg />
        </span>
        <p className="text-xs text-gray-500 mt-2">
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
      <div className="flex items-center flex-wrap gap-4">
        {/* img Cards */}
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group bg-white shadow-sm rounded-xl overflow-hidden py-4 px-2 hover:shadow-md transition-all w-72"
          >
            <div className="flex items-center justify-between mb-2 pr-2">
              <h4 className="text-sm font-medium text-gray-800 truncate">
                {img.title}
              </h4>

              {/* dropdown menu */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <span className="cursor-pointer hover:scale-105 duration-300 ease-in-out">
                    <ThreeDotSvg />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-12" align="center">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Copy Link</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Share Design</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem >Download</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <img
              src={img.imgSrc}
              alt={img.title}
              className="w-full h-40 rounded object-cover"
            />

            <div className="flex items-center mt-2 justify-between ">
              <span className="rounded-full p-1">
                <FcBusinessman size={24} />
              </span>
              <div className="flex items-center gap-3">
                <p className="text-xs  text-gray-500">{img.size}</p>
                <span  onClick={handleDownload}><DownloadSvg /></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignGallery;
