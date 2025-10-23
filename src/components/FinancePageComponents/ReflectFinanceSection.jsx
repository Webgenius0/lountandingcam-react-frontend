import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ThreeDotSvg from "../svg/ThreeDotSvg";
import OpenLockSvg from "../svg/OpenLockSvg";
import ResetSvg from "../svg/ReloadSvg";
import CloseLockSvg from "../svg/CloseLockSvg";
import EqualSvg from "../svg/EqualSvg";

export default function ReflectFinanceSection() {
  const [months, setMonths] = useState([
    {
      id: 1,
      title: "January",
      question: "What did you learn about saving this month?",
      text: "",
      locked: false,
    },
    {
      id: 2,
      title: "February",
      question: "What did you learn about saving this month?",
      text: "",
      locked: true,
    },
    {
      id: 3,
      title: "March",
      question: "What did you learn about saving this month?",
      text: "",
      locked: true,
    },
  ]);

  const [open, setOpen] = useState(false);
  const [activeMonth, setActiveMonth] = useState(null);
  const [tempText, setTempText] = useState("");
  const [allowance, setAllowance] = useState("");
  const [expense, setExpense] = useState("");

  const saved = (Number(allowance) || 0) - (Number(expense) || 0);

  const handleOpenModal = (monthId) => {
    const month = months.find((m) => m.id === monthId);
    setActiveMonth(monthId);
    setTempText(month.text || "");
    setOpen(true);
  };

  const handleSave = () => {
    setMonths((prev) =>
      prev.map((m) => (m.id === activeMonth ? { ...m, text: tempText } : m))
    );
    setOpen(false);
  };

  // reset btn
  const handleReset = (monthId) => {
    setMonths((prev) =>
      prev.map((m) => (m.id === monthId ? { ...m, text: "" } : m))
    );
  };

  return (
    <section className="bg-gray-100 py-30">
      <div className="2xl:max-w-9/12 mx-auto">
        <h2 className="text-5xl text-center mb-5 font-semibold">
          Reflect, Write & Grow One Month at a Time
        </h2>
        <p className="text-center w-6/12 mx-auto mb-12 text-gray-400">
          Each month brings a new question to inspire self-reflection and
          personal growth. Choose a prompt, write your thoughts, and save your
          entry to track your journey throughout the year.
        </p>

        {/* text input box */}
        <div className="grid grid-cols-3 gap-4">
          {months.map((month) => (
            <div key={month.id}>
              <div className="flex gap-3 mb-4 items-center">
                <h4 className="text-2xl font-bold">{month.title}</h4>
                <span className="bg-white p-1.5 rounded-full">
                  {month.locked ? <CloseLockSvg /> : <OpenLockSvg />}
                </span>
              </div>

              <div className="bg-gray-50 p-4 relative border rounded-xl hover:bg-linear-90 from-[rgba(246,205,219,1)] via-[rgba(217,235,246,1)] via-46% to-[rgba(215,204,237,1)] duration-300 transition-all ease-in-out">
                <div className="flex mb-4 items-center justify-between">
                  <p className="font-semibold">{month.question}</p>
                  <span>
                    <ThreeDotSvg />
                  </span>
                </div>

                {/* equation section */}
                <div className="my-4 flex items-center justify-between max-w-fit gap-2">
                  <span className="flex flex-col">
                    <label className="text-sm text-gray-400">
                      Allowance Received
                    </label>
                    <input
                      type="number"
                      value={allowance}
                      onChange={(e) => setAllowance(e.target.value)}
                      className="bg-white px-2 border placeholder:text-gray-300 py-3 w-34 rounded-sm"
                      placeholder="$70"
                    />
                  </span>

                  <span>
                    <EqualSvg />
                  </span>

                  <span className="flex flex-col">
                    <label className="text-sm text-gray-400">Expenses</label>
                    <input
                      type="number"
                      value={expense}
                      onChange={(e) => setExpense(e.target.value)}
                      className="bg-white px-2 border placeholder:text-gray-300 py-3 w-30 rounded-sm"
                      placeholder="$30"
                    />
                  </span>

                  <span className="flex flex-col">
                    <label className="text-sm text-gray-400">
                      Amount Saved
                    </label>
                    <p className="bg-primary px-2 py-3 text-center w-30 text-white rounded-sm">
                      {
                        saved ? saved : '$30'
                      }
                    </p>
                  </span>
                </div>

                {/* input text area */}

                <textarea
                  placeholder="Write your thoughts here…"
                  className="w-full h-40 px-4 py-4 placeholder:text-gray-400 bg-white border rounded-xl cursor-pointer"
                  readOnly
                  onClick={() => handleOpenModal(month.id)}
                  value={month.text}
                />

                <button
                  onClick={() => handleReset(month.id)}
                  className="p-1  absolute z-20 scale-105 bg-gray-50 right-8 top-40 rounded-sm hover:bg-gray-200 transition"
                >
                  <ResetSvg />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[500px] rounded-xl bg-gray-100">
          <Textarea
            placeholder="Write your thoughts here…"
            value={tempText}
            onChange={(e) => setTempText(e.target.value)}
            className="h-48 bg-white mt-4"
          />

          <div className="flex justify-end mt-5">
            <Button
              variant="outline"
              onClick={handleSave}
              className="mr-3 cursor-pointer"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
