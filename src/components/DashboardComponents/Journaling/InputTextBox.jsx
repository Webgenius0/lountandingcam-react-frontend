import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ThreeDotSvg from "../../svg/ThreeDotSvg";
import OpenLockSvg from "../../svg/OpenLockSvg";
import ResetSvg from "../../svg/ReloadSvg";
import CloseLockSvg from "../../svg/CloseLockSvg";

export default function InputTextBox() {


   const [weeks, setWeeks] = useState([
      {
        id: 1,
        title: "Week 1",
        question: "What made you feel proud this week?",
        text: "",
        locked: false
      },
      {
        id: 2,
        title: "Week 2",
        question: "What made you feel proud this week?",
        text: "",
        locked: true
      },
      {
        id: 3,
        title: "Week 3",
        question: "What made you feel proud this week?",
        text: "",
        locked: true
      },
      {
        id: 4,
        title: "Week 4",
        question: "What made you feel proud this week?",
        text: "",
        locked: true
      },
      {
        id: 5,
        title: "Week 5",
        question: "What made you feel proud this week?",
        text: "",
        locked: true
      },
      {
        id: 6,
        title: "Week 6",
        question: "What made you feel proud this week?",
        text: "",
        locked: true
      },
      {
        id: 7,
        title: "Week 7",
        question: "What made you feel proud this week?",
        text: "",
        locked: true
      },
      {
        id: 8,
        title: "Week 8",
        question: "What made you feel proud this week?",
        text: "",
        locked: true
      },
      {
        id: 9,
        title: "Week 9",
        question: "What made you feel proud this week?",
        text: "",
        locked: true
      },
      {
        id: 10,
        title: "Week 10",
        question: "What made you feel proud this week?",
        text: "",
        locked: true
      },
    ]);
  
    const [open, setOpen] = useState(false);
    const [activeWeek, setActiveWeek] = useState(null);
    const [tempText, setTempText] = useState("");
  
    const handleOpenModal = (weekId) => {
      const week = weeks.find((w) => w.id === weekId);
      setActiveWeek(weekId);
      setTempText(week.text || "");
      setOpen(true);
    };
  
    const handleSave = () => {
      setWeeks((prev) =>
        prev.map((w) => (w.id === activeWeek ? { ...w, text: tempText } : w))
      );
      setOpen(false);
    };
  
    // reset btn
    const handleReset = (weekId) => {
      setWeeks((prev) =>
        prev.map((w) => (w.id === weekId ? { ...w, text: "" } : w))
      );
    };
  

  return (
     <section className="bg-gray-100 py-10">
         
        
   
           {/* text input box */}
           <div className="grid grid-cols-3 gap-4">
             {weeks.map((week) => (
               <div key={week.id}>
                 <div className="flex gap-3 mb-4 items-center">
                   <h4 className="text-2xl font-bold">{week.title}</h4>
                   <span className="bg-white p-1.5 rounded-full">
                     {week.locked ? < CloseLockSvg /> : <OpenLockSvg />}
                   </span>
                 </div>
   
                 <div className="bg-gray-50 p-4 relative border rounded-xl hover:bg-linear-90 from-[rgba(246,205,219,1)] via-[rgba(217,235,246,1)] via-46% to-[rgba(215,204,237,1)] duration-300 transition-all ease-in-out">
                   <div className="flex mb-4 items-center justify-between">
                     <p className="font-semibold">{week.question}</p>
                     <span>
                       <ThreeDotSvg />
                     </span>
                   </div>
   
                   <textarea
                     placeholder="Write your thoughts here…"
                     className="w-full h-40 px-4 py-4 placeholder:text-gray-400 bg-white border rounded-xl cursor-pointer"
                     readOnly
                     onClick={() => handleOpenModal(week.id)}
                     value={week.text}
                   />
   
                   <button
                     onClick={() => handleReset(week.id)}
                     className="p-1  absolute z-20 scale-105 bg-gray-50 right-8 top-19 rounded-sm hover:bg-gray-200 transition"
                   >
                     <ResetSvg />
                   </button>
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
  )
}
