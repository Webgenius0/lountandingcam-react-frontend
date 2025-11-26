import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ThreeDotSvg from "../../svg/ThreeDotSvg";
import OpenLockSvg from "../../svg/OpenLockSvg";
// import ResetSvg from "../../svg/ReloadSvg";
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
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

export default function InputTextBoxFinance({ financesData }) {
  const [months, setMonths] = useState(financesData);
  const axiosSecure = useAxiosSecure();

  const [open, setOpen] = useState(false);
  const [activeMonth, setActiveMonth] = useState(null);
  const [tempText, setTempText] = useState("");

  const { mutateAsync: saveFinances, isPending } = useMutation({
    mutationFn: async (pay) => {
      const res = await axiosSecure.post("/finances/submit", pay);
      return res.data;
    },
  });

  // save modal
  const handleSave = async () => {
    try {
      // Post request
      const currentMonth = months.find((m) => m.id === activeMonth);
      await saveFinances({
        finance_id: activeMonth,
        allowance: Number(currentMonth.allowance) || 0,
        expenses: Number(currentMonth.expenses) || 0,
        content: tempText || "",
      });

      setMonths((prev) =>
        prev.map((m) =>
          m.id === activeMonth ? { ...m, content: tempText } : m
        )
      );

      toast.success("Saved!");
      setOpen(false);
    } catch (error) {
      toast.error("Failed to save!");
      console.log(error);
    }
  };

  const handleOpenModal = (monthId) => {
    const month = months.find((m) => m.id === monthId);

    if (!month?.is_current) {
      toast.error("This month is locked!");
      return;
    }

    setActiveMonth(monthId);
    setTempText(month.content || "");
    setOpen(true);
  };

  // reset btn
  // const handleReset = (monthId) => {
  //   setMonths((prev) =>
  //     prev.map((m) =>
  //       m.id === monthId ? { ...m, text: "", allowance: "", expenses: "" } : m
  //     )
  //   );
  // };

  // handle allowance or expense change

  const handleInputChange = (monthId, field, value) => {
    setMonths((prev) =>
      prev.map((m) =>
        m.id === monthId
          ? {
              ...m,
              [field]: value,
              save_amount:
                field === "allowance" || field === "expenses"
                  ? (field === "allowance"
                      ? Number(value)
                      : Number(m.allowance)) -
                    (field === "expenses" ? Number(value) : Number(m.expenses))
                  : m.save_amount,
            }
          : m
      )
    );
  };

  return (
    <section className="bg-gray-100 py-10">
      {/* text input box */}
      <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-4">
        {months.map((month) => {
          return (
            <div key={month.id}>
              <div className="flex gap-3 mb-4 items-center">
                <h4 className="text-2xl font-bold">{month.month}</h4>
                <span className="bg-white p-1.5 rounded-full">
                  {month?.is_current === false ? (
                    <CloseLockSvg />
                  ) : (
                    <OpenLockSvg />
                  )}
                </span>
              </div>

              <div className=" bg-gray-50 p-4 relative border rounded-xl overflow-hidden group ">
                {/* gradient overlay */}

                <div className={`absolute inset-0 bg-linear-90 from-[rgba(246,205,219,1)] via-[rgba(217,235,246,1)] via-46% to-[rgba(215,204,237,1)]  transition-opacity duration-300 ease-in-out ${month?.is_current === false ? "opacity-0" : "opacity-100"} `}/>

                {/* content */}

                <div className="relative z-10">
                  <div className="flex mb-4 items-center justify-between">
                    <p className="font-semibold">
                      What did you learn about saving this month?
                    </p>
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
                  <form className="my-4 flex items-center flex-wrap justify-between max-w-fit gap-2">
                    {/* Allowance */}
                    <span className="flex flex-col">
                      <label className="text-sm text-gray-400">
                        Allowance Received
                      </label>
                      <input
                        type="number"
                        disabled={!month?.is_current}
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
                        name="allowance"
                      />
                    </span>

                    <span className="mt-4">
                      <EqualSvg />
                    </span>

                    {/* expenses */}
                    <span className="flex flex-col">
                      <label className="text-sm text-gray-400">Expenses</label>
                      <input
                        type="number"
                         disabled={!month?.is_current}
                        value={month.expenses}
                        onChange={(e) =>
                          handleInputChange(
                            month.id,
                            "expenses",
                            e.target.value
                          )
                        }
                        className="bg-white px-2 border placeholder:text-gray-300 py-3 w-30 rounded-sm"
                        placeholder="$30"
                        name="expenses"
                      />
                    </span>

                    {/* Saved Amount */}
                    <span className="flex flex-col">
                      <label className="text-sm text-gray-400">
                        Amount Saved
                      </label>
                      <p className="bg-primary px-2 py-3 overflow-x-hidden text-center w-30 text-white rounded-sm">
                        {Number(month.allowance || 0) -
                          Number(month.expenses || 0)}
                      </p>
                    </span>
                  </form>

                  {/* text area */}
                  <textarea
                    placeholder="Write your thoughts here…"
                    className="w-full h-40 px-4 py-4 resize-none placeholder:text-gray-400 bg-white border rounded-xl cursor-pointer"
                    readOnly
                    onClick={() => handleOpenModal(month.id)}
                    value={month.content}
                  />

                  {/* reset button */}
                  {/* <button
                    onClick={() => handleReset(month.id)}
                    className="p-1 absolute z-20 scale-105 bg-gray-50 right-8 bottom-32 md:top-55  lg:top-37  rounded-sm hover:bg-gray-200 transition"
                  >
                    <ResetSvg />
                  </button> */}
                </div>
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
            className="h-48 bg-white resize-none mt-4"
          />

          <div className="flex justify-end mt-5">
            <Button
              variant="outline"
              onClick={handleSave}
              disabled={isPending}
              className={`mr-2 bg-primary text-white duration-300 ease-in-out hover:bg-secondary ${
                isPending ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              {isPending ? "Saving..." : "Save"}
            </Button>
            <button
              onClick={() => setOpen(false)}
              className="text-white bg-red-500 rounded-lg text-sm px-3 duration-300 ease-in-out hover:bg-red-500/50 cursor-pointer py-1"
            >
              Cancel
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
