import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ThreeDotSvg from "../../svg/ThreeDotSvg";
import OpenLockSvg from "../../svg/OpenLockSvg";
import ResetSvg from "../../svg/ReloadSvg";
import CloseLockSvg from "../../svg/CloseLockSvg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";

export default function InputTextBox({ journalData }) {
  const axiosSecure = useAxiosSecure();
  const [weeks, setWeeks] = useState(journalData);

  const { mutateAsync: saveJournal, isPending } = useMutation({
    mutationFn: async (payload) => {
      const res = await axiosSecure.post("/journal-submit", payload);
      return res.data;
    },
  });

  console.log(journalData);

  const [open, setOpen] = useState(false);
  const [activeWeek, setActiveWeek] = useState(null);
  const [tempText, setTempText] = useState("");

  const handleOpenModal = (weekId) => {
    const week = weeks.find((w) => w.id === weekId);

    if (!week?.is_unlock) {
      toast.error("This week is locked!");
      return;
    }

    setActiveWeek(weekId);
    setTempText(week.content || "");
    setOpen(true);
  };

  const handleSave = async () => {
    try {
      // POST request
      await saveJournal({
        content: tempText || "",
      });

      // await axiosSecure.post("/journal-submit", {
      //   content: tempText
      // });

      // UI update
      setWeeks((prev) =>
        prev.map((w) => (w.id === activeWeek ? { ...w, content: tempText } : w))
      );

      toast.success("Saved!");
      setOpen(false);
    } catch (error) {
      toast.error("Failed to save!");
      console.log(error);
    }
  };

  // reset btn
  // const handleReset = (weekId) => {
  //   setWeeks((prev) =>
  //     prev.map((w) => (w.id === weekId ? { ...w, text: "" } : w))
  //   );
  // };

  return (
    <section className="bg-gray-100 py-10">
      {/* text input box */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
        {weeks.map((week) => (
          <div key={week.id}>
            <div className="flex gap-3 mb-4 items-center">
              <h4 className="text-2xl font-bold">Week {week.week}</h4>
              <span className="bg-white p-1.5 rounded-full">
                {week.is_unlock === false ? <CloseLockSvg /> : <OpenLockSvg />}
              </span>
            </div>

            <div className=" bg-gray-50 p-4 relative border rounded-xl overflow-hidden group ">
              {/* gradient overlay that transitions in */}

              <div className="absolute inset-0 bg-linear-90 from-[rgba(246,205,219,1)] via-[rgba(217,235,246,1)] via-46% to-[rgba(215,204,237,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />

              {/* Content */}

              <div className="relative z-10">
                <div className="flex mb-4 items-center justify-between">
                  <p className="font-semibold">
                    What made you feel proud this week?
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

                <textarea
                  placeholder="Write your thoughts here…"
                  className="w-full h-40 px-4 py-4 resize-none placeholder:text-gray-400 bg-white border rounded-xl cursor-pointer"
                  readOnly
                  onClick={() => handleOpenModal(week.id)}
                  value={week.content}
                />

                {/* <button
                  onClick={() => handleReset(week.id)}
                  className="p-1  absolute z-20 scale-105 bg-gray-50 right-7 bottom-32 rounded-sm hover:bg-gray-200 transition"
                >
                  <ResetSvg />
                </button> */}
              </div>
            </div>
          </div>
        ))}
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
