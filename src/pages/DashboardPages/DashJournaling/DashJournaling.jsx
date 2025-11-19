import React from "react";
import JournalImg from "../../../assets/Img/dashJournalImg.svg";
import HeaderCard from "../../../components/common/DashHeaderCard";
import InputTextBox from "../../../components/DashboardComponents/Journaling/InputTextBox";
import WeekProgressChart from "../../../components/DashboardComponents/Journaling/WeekProgressChart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function DashJournaling() {
  const axiosSecure = useAxiosSecure();

  const { data: journals = [], isLoading } = useQuery({
    queryKey: ["journaling"],
    queryFn: async () => {
      const res = await axiosSecure.get("/journaling");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <>
        <p>loading....</p>
      </>
    );
  }

  const journalData = journals.data.journals;
  const progress = journals.data.progress;

  console.log("progress", progress);

  return (
    <div className="mb-20">
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <HeaderCard
          title="Reflect, Write & Grow Each Week"
          description="Capture your thoughts weekly, track your emotions, and build self-awareness through guided prompts and personal reflections."
          image={JournalImg}
          gradientColors="from-[rgba(246,205,219,1)] via-[rgba(217,235,246,1)] via-46% to-[rgba(215,204,237,1)]"
          className=" md:py-10"
        />

        <div className="bg-white flex gap-3 flex-col w-full lg:w-fit items-center justify-center p-4 border rounded-xl">
          <WeekProgressChart progress={progress} />
          <p className="text-gray-500 text-sm md:text-base">
            You’ve completed {progress.completed} out of {progress.total} prompts.
          </p>
        </div>
      </div>

      <InputTextBox journalData={journalData} />
    </div>
  );
}
