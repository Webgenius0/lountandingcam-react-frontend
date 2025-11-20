import React from "react";
import HeaderCard from "../../../components/common/DashHeaderCard";
import moneyGfx from "../../../assets/Img/dashMoneyImg.svg";
import InputTextBoxFinance from "../../../components/DashboardComponents/Finance/InputTextBoxFinance";
import MonthProgressChart from "../../../components/DashboardComponents/Finance/MonthProgressChart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import JournelLoader from "../../../components/common/loader/JournelLoader";

export default function DashFinance() {

  const axiosSecure = useAxiosSecure();

  // Get method
  const { data: finances = [], isLoading } = useQuery({
    queryKey: ["finances"],
    queryFn: async () => {
      const res = await axiosSecure.get("/finances");
      return res.data;
    },
  });

    //loading-skeleton
    if (isLoading) {
      return (
        <>
          <JournelLoader/>
        </>
      );
    }

      //  extracting finances and progress from API response
  const financesData = finances.data.finances;
  const progress = finances.data.progress;

  // console.log(" finances" , financesData, progress)


  return (
    <div className="mb-20">
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <HeaderCard
          title="Master Your Money with Confidence"
          description="Learn how to budget, track spending, and build smart saving habits to manage your money wisely each month."
          image={moneyGfx}
          gradientColors="from-[rgba(246,205,219,1)] via-[rgba(217,235,246,1)] via-46% to-[rgba(215,204,237,1)]"
          className="2xl:py-0! py--8 lg:py-10 "
        />

        <div className="bg-white flex gap-2 w-full lg:w-fit flex-col items-center justify-center px-4 pb-4 border rounded-xl">
          <MonthProgressChart progress={progress} />
          <p className="text-gray-500">You’ve completed {progress.completed} of {progress.total} months.</p>
        </div>
      </div>
      <InputTextBoxFinance financesData={financesData} />
    </div>
  );
}
