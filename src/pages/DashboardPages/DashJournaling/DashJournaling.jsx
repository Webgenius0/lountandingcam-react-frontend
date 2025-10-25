import React from "react";
import JournalImg from "../../../assets/Img/dashJournalImg.svg";
import HeaderCard from "../../../components/common/DashHeaderCard";
import InputTextBox from "../../../components/DashboardComponents/Journaling/InputTextBox";
import WeekProgressChart from "../../../components/DashboardComponents/Journaling/WeekProgressChart";

export default function DashJournaling() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <HeaderCard
          title="Reflect, Write & Grow Each Week"
          description="Capture your thoughts weekly, track your emotions, and build self-awareness through guided prompts and personal reflections."
          image={JournalImg}
          gradientColors="from-[rgba(246,205,219,1)] via-[rgba(217,235,246,1)] via-46% to-[rgba(215,204,237,1)]"
          className=" py-10"
        />

        <div className="bg-white flex gap-3 flex-col items-center justify-center p-4 border rounded-xl">
          <WeekProgressChart />
          <p className="text-gray-500">You’ve completed 5 out of 52 prompts.</p>
        </div>
      </div>

      <InputTextBox />
    </div>
  );
}
