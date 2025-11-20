import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function WeekProgressChart({progress}) {
  const totalWeeks = progress.total;
  const completedWeeks = progress.completed;
  const progressWeek = (completedWeeks / totalWeeks) * 100;

  const data = [
    { name: "Completed", value: progressWeek },
    { name: "Remaining", value: 100 - progressWeek},
  ];

  const COLORS = ["#8571f4", "#f1f2f6"];

  return (
    <div className="flex flex-col w-full h-36 items-center justify-center bg-white  ">
      <div style={{ width: 160, height: 160, position: "relative" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={450}
              innerRadius="70%"
              outerRadius="85%"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold text-[#8571f4]">{completedWeeks}</p>
          <p className="text-gray-500 text-sm text-center leading-tight">
            Weeks <br /> completed
          </p>
        </div>
      </div>
    </div>
  );
}
