import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import LogOutRedSvg from "../svg/LogOutRedSvg";

export default function LogoutConfirmModal({ open, onClose, onConfirm }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] text-center rounded-2xl">
        <div className="flex flex-col items-center justify-center space-y-3 py-4">
          <div className="bg-red-100 p-3 rounded-full">
           <LogOutRedSvg/>
          </div>

          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-gray-800">
              Confirm Log Out?
            </DialogTitle>
          </DialogHeader>

          <p className="text-gray-500 text-sm">
            Are you sure you want to log out?
          </p>
        </div>

        <DialogFooter className="flex  mx-auto ">
          <Button
            onClick={onConfirm}
            className="bg-red-500 hover:bg-red-600 text-white px-6 rounded-full"
          >
            Log Out
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            className="px-6 rounded-full"
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
