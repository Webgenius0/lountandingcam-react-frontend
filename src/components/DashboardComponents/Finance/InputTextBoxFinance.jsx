import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ThreeDotSvg from "../../svg/ThreeDotSvg";
import OpenLockSvg from "../../svg/OpenLockSvg";
import ResetSvg from "../../svg/ReloadSvg";
import CloseLockSvg from "../../svg/CloseLockSvg";
import EqualSvg from "../../svg/EqualSvg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function InputTextBoxFinance() {
  const [months, setMonths] = useState([
    {
      id: 1,
      title: "January",
      question: "What did you learn about saving this month?",
      text: "",
      locked: false,
      allowance: "",
      expense: "",
    },
    {
      id: 2,
      title: "February",
      question: "What did you learn about saving this month?",
      text: "",
      locked: true,
      allowance: "",
      expense: "",
    },
    {
      id: 3,
      title: "March",
      question: "What did you learn about saving this month?",
      text: "",
      locked: true,
      allowance: "",
      expense: "",
    },
    {
      id: 4,
      title: "April",
      question: "What did you learn about saving this month?",
      text: "",
      locked: true,
      allowance: "",
      expense: "",
    },
    {
      id: 5,
      title: "May",
      question: "What did you learn about saving this month?",
      text: "",
      locked: true,
      allowance: "",
      expense: "",
    },
    {
      id: 6,
      title: "June",
      question: "What did you learn about saving this month?",
      text: "",
      locked: true,
      allowance: "",
      expense: "",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [activeMonth, setActiveMonth] = useState(null);
  const [tempText, setTempText] = useState("");

  // save modal
  const handleSave = () => {
    setMonths((prev) =>
      prev.map((m) => (m.id === activeMonth ? { ...m, text: tempText } : m))
    );
    setOpen(false);
  };

  const handleOpenModal = (monthId) => {
    const month = months.find((m) => m.id === monthId);
    setActiveMonth(monthId);
    setTempText(month.text || "");
    setOpen(true);
  };

  // reset btn
  const handleReset = (monthId) => {
    setMonths((prev) =>
      prev.map((m) =>
        m.id === monthId ? { ...m, text: "", allowance: "", expense: "" } : m
      )
    );
  };

  // handle allowance or expense change
  const handleInputChange = (monthId, field, value) => {
    setMonths((prev) =>
      prev.map((m) => (m.id === monthId ? { ...m, [field]: value } : m))
    );
  };

  return (
    <section className="bg-gray-100 py-10">
      {/* text input box */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {months.map((month) => {
          const saved =
            (Number(month.allowance) || 0) - (Number(month.expense) || 0);

          return (
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
                        <DropdownMenuItem>Share Link</DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* equation section */}
                <div className="my-4 flex flex-wrap items-center justify-between max-w-fit gap-2">
                  <span className="flex flex-col">
                    <label className="text-sm text-gray-400">
                      Allowance Received
                    </label>
                    <input
                      type="number"
                      value={month.allowance}
                      onChange={(e) =>
                        handleInputChange(month.id, "allowance", e.target.value)
                      }
                      className="bg-white px-2 border placeholder:text-gray-300 py-3 w-34 rounded-sm"
                      placeholder="$100"
                    />
                  </span>

                  <span>
                    <EqualSvg />
                  </span>

                  <span className="flex flex-col">
                    <label className="text-sm text-gray-400">Expenses</label>
                    <input
                      type="number"
                      value={month.expense}
                      onChange={(e) =>
                        handleInputChange(month.id, "expense", e.target.value)
                      }
                      className="bg-white px-2 border placeholder:text-gray-300 py-3 w-30 rounded-sm"
                      placeholder="$30"
                    />
                  </span>

                  <span className="flex flex-col">
                    <label className="text-sm text-gray-400">
                      Amount Saved
                    </label>
                    <p className="bg-primary overflow-hidden px-2 py-3 text-center w-30 text-white rounded-sm">
                      {saved ? saved : "$70"}
                    </p>
                  </span>
                </div>

                {/* text area */}
                <textarea
                  placeholder="Write your thoughts here…"
                  className="w-full h-40 px-4 py-4 placeholder:text-gray-400 bg-white border rounded-xl cursor-pointer"
                  readOnly
                  onClick={() => handleOpenModal(month.id)}
                  value={month.text}
                />

                {/* reset button */}
                <button
                  onClick={() => handleReset(month.id)}
                  className="p-1 absolute z-20 scale-105 bg-gray-50 right-8 top-40 rounded-sm hover:bg-gray-200 transition"
                >
                  <ResetSvg />
                </button>
              </div>
            </div>
          );
        })}
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
