import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ThreeDotSvg from "../svg/ThreeDotSvg";
import OpenLockSvg from "../svg/OpenLockSvg";
import ResetSvg from "../svg/ReloadSvg";
import CloseLockSvg from "../svg/CloseLockSvg";
import EqualSvg from "../svg/EqualSvg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router";

export default function ReflectFinanceSection() {
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
  ]);

  const navigate = useNavigate()

  const [open, setOpen] = useState(false);
  // const [activeMonth, setActiveMonth] = useState(null);
  const [tempText, setTempText] = useState("");

  // open modal
  const handleOpenModal = () => {

    navigate('/dashboard/finance')

    // const month = months.find((m) => m.id === monthId);
    // setActiveMonth(monthId);
    // setTempText(month.text || "");
    // setOpen(true);
  };

  // save modal
  // const handleSave = () => {
  //   setMonths((prev) =>
  //     prev.map((m) => (m.id === activeMonth ? { ...m, text: tempText } : m))
  //   );
  //   setOpen(false);
  // };

  // reset btn
  // const handleReset = (monthId) => {
  //   setMonths((prev) =>
  //     prev.map((m) =>
  //       m.id === monthId ? { ...m, text: "", allowance: "", expense: "" } : m
  //     )
  //   );
  // };

  // handle allowance or expense change
  const handleInputChange = (monthId, field, value) => {
    setMonths((prev) =>
      prev.map((m) => (m.id === monthId ? { ...m, [field]: value } : m))
    );
  };

  return (
    <section className="bg-gray-100 py-10 lg:py-30">
      <div className="2xl:max-w-9/12 w-11/12 mx-auto">
        <h2 className="lg:text-5xl text-2xl md:text-3xl
         text-center mb-5 font-semibold">
          Reflect, Write & Grow One Month at a Time
        </h2>
        <p className="text-center text-sm md:text-base xl:w-6/12 mx-auto mb-12 text-gray-400">
          Each month brings a new question to inspire self-reflection and
          personal growth. Choose a prompt, write your thoughts, and save your
          entry to track your journey throughout the year.
        </p>

        {/* month boxes */}
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
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

                <div className=" bg-gray-50 p-4 relative border rounded-xl overflow-hidden group ">
                  {/* Gradient overlay that transitions in */}

                  <div className="absolute inset-0 bg-linear-90 from-[rgba(246,205,219,1)] via-[rgba(217,235,246,1)] via-46% to-[rgba(215,204,237,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />

                  {/* Content */}

                  <div className="relative z-10">

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
                    <div className="my-4 flex items-center flex-wrap  justify-between max-w-fit gap-2">
                      <span className="flex flex-col">
                        <label className="text-sm text-gray-600">
                          Allowance Received
                        </label>
                        <input
                          type="number"
                          value={month.allowance}
                          onChange={(e) =>
                            handleInputChange(
                              month.id,
                              "allowance",
                              e.target.value
                            )
                          }
                          className="bg-white px-2 border placeholder:text-gray-300 py-3 w-34 rounded-sm"
                          placeholder="$100"
                        />
                      </span>

                      <span className="mt-4">
                        <EqualSvg />
                      </span>

                      <span className="flex flex-col">
                        <label className="text-sm text-gray-600">
                          Expenses
                        </label>
                        <input
                          type="number"
                          value={month.expense}
                          onChange={(e) =>
                            handleInputChange(
                              month.id,
                              "expense",
                              e.target.value
                            )
                          }
                          className="bg-white px-2 border placeholder:text-gray-300 py-3 w-30 rounded-sm"
                          placeholder="$30"
                        />
                      </span>

                      <span className="flex flex-col">
                        <label className="text-sm text-gray-600">
                          Amount Saved
                        </label>
                        <p className="bg-primary px-2 py-3 overflow-x-hidden text-center w-30 text-white rounded-sm">
                          {saved ? saved : "$70"}
                        </p>
                      </span>
                    </div>

                    {/* text area */}
                    <textarea
                      placeholder="Write your thoughts here…"
                      className="w-full h-40 px-4 py-4 resize-none placeholder:text-gray-400 bg-white border rounded-xl cursor-pointer"
                      readOnly
                      onClick={() => handleOpenModal(month.id)}
                      value={month.text}
                    />

                    {/* reset button */}
                    <button
                      // onClick={() => handleReset(month.id)}
                      className="p-1 absolute z-20 scale-105 bg-gray-50 right-8 bottom-32 md:top-55 2xl:top-37 rounded-sm hover:bg-gray-200 transition"
                    >
                      <ResetSvg />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[450px] rounded-xl bg-gray-100">
          <Textarea
            placeholder="Write your thoughts here…"
            value={tempText}
            onChange={(e) => setTempText(e.target.value)}
            className="h-48 bg-white resize-none mt-4"
          />
          <div className="flex justify-end mt-5">
            <Button
              variant="outline"
              // onClick={handleSave}
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
